﻿using BookingBadmintain.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace BookingBadmintain.Common
{
    public class SoftwareCache
    {
        static SoftwareCache()
        {
            if (File.Exists(".\\Cookie.txt"))
            {
                CookieString = File.ReadAllText(".\\Cookie.txt");
            }
        }
        public static CookieContainer Cookie { get; set; }

        public static string CookieString { get; set; } = string.Empty;

        public static LoginUser LoginUser { get; set; }
    }
}
