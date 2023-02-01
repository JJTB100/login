using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Server
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to JJTB100's server");

            //create a http server that listens on port 80

            const int port = 8080;

            string prefix = ($"http://localhost:{port}/");

            HttpListener server = new HttpListener();
            server.Prefixes.Add(prefix);
            
            server.Start();
            Console.WriteLine("Listening...");
            int hitcount = 0;

            while (true)
            {
                HttpListenerContext context = server.GetContext();
                HttpListenerRequest request = context.Request;
                HttpListenerResponse response = context.Response;
                
                Console.WriteLine($"Request: '{request.RawUrl}'");
                string html = "";
                byte[] buffer = Encoding.UTF8.GetBytes("");
                switch (request.RawUrl)
                {
                    case "/":
                        //research
                        buffer = File.ReadAllBytes("../../Static/index.html");
                        break;
                    default:
                        string path = $"../../Static{request.RawUrl}";
                        if (File.Exists(path))
                        {
                            buffer = File.ReadAllBytes(path);
                        }
                        else
                        {
                            response.StatusCode = 404;
                            buffer = Encoding.UTF8.GetBytes("Sorry File Not Found");
                            Console.WriteLine($"Unkown URL: {request.RawUrl}");
                        }
                        
                        break;

                }
                
                Console.WriteLine($"Sending {buffer.Length}");
                response.ContentLength64 = buffer.Length;
                response.OutputStream.Write(buffer, 0, buffer.Length);
                response.OutputStream.Close();
                
            }
            server.Stop();
        }
    }
}
