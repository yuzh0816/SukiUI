using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using Avalonia;
using Avalonia.Controls.ApplicationLifetimes;
using SkiaSharp;

namespace SukiUI.Utilities
{
    /// <summary>
    /// Represents an SKSL shader that SukiUI can handle and pass relevant uniforms into.
    /// Use the static methods <see cref="SukiEffect.FromEmbeddedResource"/> and <see cref="SukiEffect.FromString"/> for creation.
    /// </summary>
    public class SukiEffect
    {
        // Basic uniforms passed into the shader from the CPU.
        private static readonly string[] Uniforms =
        {
            "uniform float iTime;",
            "uniform float iDark;" ,
            "uniform float iAlpha;",
            "uniform vec3 iResolution;",
            "uniform vec3 iPrimary;",
            "uniform vec3 iAccent;",
            "uniform vec3 iBase;"
        };

        private static readonly List<SukiEffect> LoadedEffects = new();
        
        private readonly string _shaderString;
        
        /// <summary>
        /// The compiled <see cref="SKRuntimeEffect"/> that will actually be used in draw calls. 
        /// </summary>
        public SKRuntimeEffect Effect { get; }

        private SukiEffect(string shaderString)
        {
            _shaderString = shaderString;
            var compiledEffect = SKRuntimeEffect.Create(_shaderString, out var errors);
            Effect = compiledEffect ?? throw new ShaderCompilationException(errors);
        }

        static SukiEffect()
        {
            if (Application.Current.ApplicationLifetime is IControlledApplicationLifetime controlled) 
                controlled.Exit += (_,_) => EnsureDisposed();
        }
        
        /// <summary>
        /// Attempts to load and compile a ".sksl" shader file from the assembly.
        /// You don't need to provide the extension.
        /// The shader will be pre-compiled
        /// REMEMBER: For files to be discoverable in the assembly they should be marked as an embedded resource.
        /// </summary>
        /// <param name="shaderName">Name of the shader to load, with or without extension. - MUST BE .sksl</param>
        /// <returns>An instance of a SukiBackgroundShader with the loaded shader.</returns>
        public static SukiEffect FromEmbeddedResource(string shaderName)
        {
            shaderName = shaderName.ToLowerInvariant();
            if (!shaderName.EndsWith(".sksl"))
                shaderName += ".sksl";
            var assembly = Assembly.GetEntryAssembly();
            var resName = assembly!.GetManifestResourceNames()
                .FirstOrDefault(x => x.ToLowerInvariant().Contains(shaderName));
            if (resName is null)
            {
                assembly = Assembly.GetExecutingAssembly();
                resName = assembly.GetManifestResourceNames()
                    .FirstOrDefault(x => x.ToLowerInvariant().Contains(shaderName));
            }

            if (resName is null)
                throw new FileNotFoundException(
                    $"Unable to find a file with the name \"{shaderName}\" anywhere in the assembly.");
            using var tr = new StreamReader(assembly.GetManifestResourceStream(resName)!);
            return FromString(tr.ReadToEnd());
        }

        /// <summary>
        /// Attempts to compile an sksl shader from a string.
        /// The shader will be pre-compiled and any errors will be thrown as an exception.
        /// REMEMBER: For files to be discoverable in the assembly they should be marked as an embedded resource.
        /// </summary>
        /// <param name="shaderString">The shader code to be compiled.</param>
        /// <returns>An instance of a SukiBackgroundShader with the loaded shader</returns>
        public static SukiEffect FromString(string shaderString)
        {
            var sb = new StringBuilder();
            foreach (var uniform in Uniforms)
                sb.AppendLine(uniform);
            sb.Append(shaderString);
            var withUniforms = sb.ToString();
            return new SukiEffect(withUniforms);
        }


        private static bool _disposed;
        /// <summary>
        /// Necessary to make sure all the unmanaged effects are disposed.
        /// </summary>
        internal static void EnsureDisposed()
        {
            if (_disposed)
                throw new InvalidOperationException("SukiEffects should only be disposed once at the app lifecycle end.");
            _disposed = true;
            foreach (var loaded in LoadedEffects)
                loaded.Effect.Dispose();
            LoadedEffects.Clear();
        }
        
        public override bool Equals(object obj)
        {
            if (obj is not SukiEffect effect) return false;
            return effect._shaderString == _shaderString;
        }

        private class ShaderCompilationException : Exception
        {
            public ShaderCompilationException(string message) : base(message)
            {
            }
        }

    }
}