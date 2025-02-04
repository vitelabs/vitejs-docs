﻿using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Text;

namespace WinFormsApp1
{
    public class JsonSerializationSettings
    {
        public static JsonSerializerSettings PascalCaseSettings = new JsonSerializerSettings()
        {
            ContractResolver = new UnderscorePropertyNamesContractResolver()
        };
    }

    public class UnderscorePropertyNamesContractResolver : DefaultContractResolver
    {
        public UnderscorePropertyNamesContractResolver()
        {
            NamingStrategy = new SnakeCaseNamingStrategy();
        }
    }
}
