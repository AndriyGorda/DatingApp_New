using System;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;

namespace DatingApp.API.Extensions
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            const string AppErrorHeader = "Application-Error";
            response.Headers.Add(AppErrorHeader, message);
            response.Headers.Add(HeaderNames.AccessControlExposeHeaders, AppErrorHeader);
            response.Headers.Add(HeaderNames.AccessControlAllowOrigin, "*");            
        }

        public static int CalculateAge(this DateTime theDateTime)
        {
            var age = DateTime.Today.Year - theDateTime.Year;          
            if (theDateTime.AddYears(age) > theDateTime)
                age--;
            return age;
        }        
    }
}