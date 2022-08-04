﻿using Avalonia.Controls;
using Material.Icons;
using ReactiveUI;
using System;
using System.Collections.Generic;
using System.Text;

namespace SukiUI.Controls
{
    public class MobileMenuPageViewModel : ReactiveObject
    {
        private string headertext = "Home";

        public string HeaderText
        {
            get => headertext;
            set => this.RaiseAndSetIfChanged(ref headertext, value);
        }

        private bool isdialogopen = false;

        public bool IsDialogOpen
        {
            get => isdialogopen;
            set => this.RaiseAndSetIfChanged(ref isdialogopen, value);
        }


        private Control dialogchild = new Grid();

        public Control DialogChild
        {
            get => dialogchild;
            set => this.RaiseAndSetIfChanged(ref dialogchild, value);
        }


        public void ShowMenu()
        {
            MenuVisibility = false;
            MenuVisibility = true;
        }

        public void HideMenu()
        {
            MenuVisibility = false;
        }

        private bool menuvisibility = true;

        public bool MenuVisibility
        {
            get => menuvisibility;
            set => this.RaiseAndSetIfChanged(ref menuvisibility, value);
        }

        public void ChangeMenuVisibility()
        {
            MenuVisibility = !MenuVisibility;

        }

        private object currentPage = new Grid();

        public object CurrentPage
        {
            get => currentPage;
            set => this.RaiseAndSetIfChanged(ref currentPage, value);
        }

        private object headerContent = new Grid();

        public object HeaderContent
        {
            get => headerContent;
            set => this.RaiseAndSetIfChanged(ref headerContent, value);
        }

        private List<SideMenuItem> menuItems = new List<SideMenuItem>();

        public List<SideMenuItem> MenuItems
        {
            get => menuItems;
            set => this.RaiseAndSetIfChanged(ref menuItems, value);
        }

        public void ChangePage(SideMenuItem o)
        {
            HeaderText = o.Header;
            CurrentPage = o.Content;
            MenuVisibility = false; 
        }
    }
}
