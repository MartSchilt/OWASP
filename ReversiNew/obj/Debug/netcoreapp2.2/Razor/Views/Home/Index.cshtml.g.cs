#pragma checksum "D:\Local Files\Documenten\School\Security\OWASP\OWASP\ReversiNew\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "910e56018037380f89ecaf22d5d1be7132e59b34"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "D:\Local Files\Documenten\School\Security\OWASP\OWASP\ReversiNew\Views\_ViewImports.cshtml"
using ReversiNew;

#line default
#line hidden
#line 2 "D:\Local Files\Documenten\School\Security\OWASP\OWASP\ReversiNew\Views\_ViewImports.cshtml"
using ReversiNew.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"910e56018037380f89ecaf22d5d1be7132e59b34", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"defe556ddc408d653a28488d111dddcfe37962d6", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "D:\Local Files\Documenten\School\Security\OWASP\OWASP\ReversiNew\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
            BeginContext(45, 368, true);
            WriteLiteral(@"
<div class=""text-center"">
    <h1 class=""display-4"">Reversi</h1>
    <p id=""api""></p>
</div>

<!-- Game starter -->
<button class=""btn btn-primary"" onclick='SPA.Reversi.setDataClick()'>Spel starten</button>

<!-- Huidige speler -->
<div id=""currentPlayer""></div>

<!-- Reversi board -->
<table id=""reversiBoard"" align=""center"" style=""cursor: pointer;"">
");
            EndContext();
#line 18 "D:\Local Files\Documenten\School\Security\OWASP\OWASP\ReversiNew\Views\Home\Index.cshtml"
     for (int x = 0; x < 8; x++)
    {

#line default
#line hidden
            BeginContext(454, 38, true);
            WriteLiteral("        <tr class=\"reversiBoardRow\">\r\n");
            EndContext();
#line 21 "D:\Local Files\Documenten\School\Security\OWASP\OWASP\ReversiNew\Views\Home\Index.cshtml"
             for (int y = 0; y < 8; y++)
            {

#line default
#line hidden
            BeginContext(549, 44, true);
            WriteLiteral("                <td class=\"reversiBoardData\"");
            EndContext();
            BeginWriteAttribute("id", " id=\"", 593, "\"", 626, 1);
#line 23 "D:\Local Files\Documenten\School\Security\OWASP\OWASP\ReversiNew\Views\Home\Index.cshtml"
WriteAttributeValue("", 598, x.ToString()+y.ToString(), 598, 28, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(627, 32, true);
            WriteLiteral("><i class=\"fa piece\"></i></td>\r\n");
            EndContext();
#line 24 "D:\Local Files\Documenten\School\Security\OWASP\OWASP\ReversiNew\Views\Home\Index.cshtml"
            }

#line default
#line hidden
            BeginContext(674, 15, true);
            WriteLiteral("        </tr>\r\n");
            EndContext();
#line 26 "D:\Local Files\Documenten\School\Security\OWASP\OWASP\ReversiNew\Views\Home\Index.cshtml"
    }

#line default
#line hidden
            BeginContext(696, 313, true);
            WriteLiteral(@"</table>

<!-- Widget -->
<div class=""text-center"">
    <br/>
    <button onclick=""SPA.Widget().showSucces('Succes!')"">Succes</button>
    <button onclick=""SPA.Widget().showFail('Fail!')"">Fail</button>
</div>
<div id=""widget""></div>

<!-- Chart -->
<canvas id=""chart"" width=""400"" height=""200""></canvas>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
