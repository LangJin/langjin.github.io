import{_ as s,c as n,o as a,a as l}from"./app.38c0d1f0.js";const i=JSON.parse('{"title":"\u4E00\u3001\u7528\u4E00\u6761SQL \u8BED\u53E5 \u67E5\u8BE2\u51FA\u6BCF\u95E8\u8BFE\u90FD\u5927\u4E8E80 \u5206\u7684\u5B66\u751F\u59D3\u540D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5EFA\u8868","slug":"\u5EFA\u8868"},{"level":2,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":2,"title":"3.1 \u9700\u6C421\uFF1A\u67E5\u8BE2\u201D 01 \u201C\u8BFE\u7A0B\u6BD4\u201D 02 \u201C\u8BFE\u7A0B\u6210\u7EE9\u9AD8\u7684\u5B66\u751F\u7684\u4FE1\u606F\u53CA\u8BFE\u7A0B\u5206\u6570","slug":"_3-1-\u9700\u6C421\uFF1A\u67E5\u8BE2\u201D-01-\u201C\u8BFE\u7A0B\u6BD4\u201D-02-\u201C\u8BFE\u7A0B\u6210\u7EE9\u9AD8\u7684\u5B66\u751F\u7684\u4FE1\u606F\u53CA\u8BFE\u7A0B\u5206\u6570"},{"level":2,"title":"3.2 \u9700\u6C422\uFF1A\u67E5\u8BE2\u5E73\u5747\u6210\u7EE9\u5927\u4E8E\u7B49\u4E8E 60 \u5206\u7684\u540C\u5B66\u7684\u5B66\u751F\u7F16\u53F7\u548C\u5B66\u751F\u59D3\u540D\u548C\u5E73\u5747\u6210\u7EE9","slug":"_3-2-\u9700\u6C422\uFF1A\u67E5\u8BE2\u5E73\u5747\u6210\u7EE9\u5927\u4E8E\u7B49\u4E8E-60-\u5206\u7684\u540C\u5B66\u7684\u5B66\u751F\u7F16\u53F7\u548C\u5B66\u751F\u59D3\u540D\u548C\u5E73\u5747\u6210\u7EE9"},{"level":2,"title":"3.3 \u9700\u6C423\uFF1A\u67E5\u8BE2\u5728 SC \u8868\u5B58\u5728\u6210\u7EE9\u7684\u5B66\u751F\u4FE1\u606F","slug":"_3-3-\u9700\u6C423\uFF1A\u67E5\u8BE2\u5728-sc-\u8868\u5B58\u5728\u6210\u7EE9\u7684\u5B66\u751F\u4FE1\u606F"},{"level":2,"title":"3.4 \u9700\u6C424\uFF1A\u67E5\u8BE2\u6240\u6709\u540C\u5B66\u7684\u5B66\u751F\u7F16\u53F7\u3001\u5B66\u751F\u59D3\u540D\u3001\u9009\u8BFE\u603B\u6570\u3001\u6240\u6709\u8BFE\u7A0B\u7684\u603B\u6210\u7EE9(\u6CA1\u6210\u7EE9\u7684\u663E\u793A\u4E3A null )","slug":"_3-4-\u9700\u6C424\uFF1A\u67E5\u8BE2\u6240\u6709\u540C\u5B66\u7684\u5B66\u751F\u7F16\u53F7\u3001\u5B66\u751F\u59D3\u540D\u3001\u9009\u8BFE\u603B\u6570\u3001\u6240\u6709\u8BFE\u7A0B\u7684\u603B\u6210\u7EE9-\u6CA1\u6210\u7EE9\u7684\u663E\u793A\u4E3A-null"},{"level":2,"title":"3.5 \u9700\u6C425\uFF1A\u67E5\u6709\u6210\u7EE9\u7684\u5B66\u751F\u4FE1\u606F","slug":"_3-5-\u9700\u6C425\uFF1A\u67E5\u6709\u6210\u7EE9\u7684\u5B66\u751F\u4FE1\u606F"},{"level":2,"title":"4.1\u73ED\u7EA7\u8868","slug":"_4-1\u73ED\u7EA7\u8868"},{"level":2,"title":"4.2\u8BFE\u7A0B\u8868","slug":"_4-2\u8BFE\u7A0B\u8868"},{"level":2,"title":"4.3\u6210\u7EE9\u8868","slug":"_4-3\u6210\u7EE9\u8868"},{"level":2,"title":"4.4\u5B66\u751F\u8868","slug":"_4-4\u5B66\u751F\u8868"},{"level":2,"title":"4.5\u6559\u5E08\u8868","slug":"_4-5\u6559\u5E08\u8868"},{"level":2,"title":"-------sql\u67E5\u8BE2\u9700\u6C42--------","slug":"sql\u67E5\u8BE2\u9700\u6C42"},{"level":2,"title":"1\u3002\u67E5\u8BE2\u6240\u6709\u7684\u8BFE\u7A0B\u7684\u540D\u79F0\u4EE5\u53CA\u5BF9\u5E94\u7684\u4EFB\u8BFE\u8001\u5E08\u59D3\u540D","slug":"_1\u3002\u67E5\u8BE2\u6240\u6709\u7684\u8BFE\u7A0B\u7684\u540D\u79F0\u4EE5\u53CA\u5BF9\u5E94\u7684\u4EFB\u8BFE\u8001\u5E08\u59D3\u540D"},{"level":2,"title":"2\u3002\u67E5\u8BE2\u5B66\u751F\u8868\u4E2D\u7537\u5973\u751F\u5404\u6709\u591A\u5C11\u4EBA","slug":"_2\u3002\u67E5\u8BE2\u5B66\u751F\u8868\u4E2D\u7537\u5973\u751F\u5404\u6709\u591A\u5C11\u4EBA"},{"level":2,"title":"3\u3002\u67E5\u8BE2\u7269\u7406\u6210\u7EE9\u7B49\u4E8E100\u7684\u5B66\u751F\u7684\u59D3\u540D","slug":"_3\u3002\u67E5\u8BE2\u7269\u7406\u6210\u7EE9\u7B49\u4E8E100\u7684\u5B66\u751F\u7684\u59D3\u540D"},{"level":2,"title":"4\u3002\u67E5\u8BE2\u5E73\u5747\u6210\u7EE9\u5927\u4E8E\u516B\u5341\u5206\u7684\u540C\u5B66\u7684\u59D3\u540D\u548C\u5E73\u5747\u6210\u7EE9","slug":"_4\u3002\u67E5\u8BE2\u5E73\u5747\u6210\u7EE9\u5927\u4E8E\u516B\u5341\u5206\u7684\u540C\u5B66\u7684\u59D3\u540D\u548C\u5E73\u5747\u6210\u7EE9"},{"level":2,"title":"5\u3002\u67E5\u8BE2\u6240\u6709\u5B66\u751F\u7684\u5B66\u53F7\uFF0C\u59D3\u540D\uFF0C\u9009\u8BFE\u6570\uFF0C\u603B\u6210\u7EE9(\u6CE8\u610F\uFF1A\u5BF9\u4E8E\u90A3\u4E9B\u6CA1\u6709\u9009\u4FEE\u4EFB\u4F55\u8BFE\u7A0B\u7684\u5B66\u751F\u4E5F\u7B97\u5728\u5185)","slug":"_5\u3002\u67E5\u8BE2\u6240\u6709\u5B66\u751F\u7684\u5B66\u53F7\uFF0C\u59D3\u540D\uFF0C\u9009\u8BFE\u6570\uFF0C\u603B\u6210\u7EE9-\u6CE8\u610F\uFF1A\u5BF9\u4E8E\u90A3\u4E9B\u6CA1\u6709\u9009\u4FEE\u4EFB\u4F55\u8BFE\u7A0B\u7684\u5B66\u751F\u4E5F\u7B97\u5728\u5185"},{"level":2,"title":"6.\u67E5\u8BE2\u59D3\u674E\u8001\u5E08\u7684\u4E2A\u6570","slug":"_6-\u67E5\u8BE2\u59D3\u674E\u8001\u5E08\u7684\u4E2A\u6570"},{"level":2,"title":"7.\u67E5\u8BE2\u6CA1\u6709\u62A5\u674E\u5E73\u8001\u5E08\u8BFE\u7684\u5B66\u751F\u59D3\u540D","slug":"_7-\u67E5\u8BE2\u6CA1\u6709\u62A5\u674E\u5E73\u8001\u5E08\u8BFE\u7684\u5B66\u751F\u59D3\u540D"},{"level":2,"title":"8.\u67E5\u8BE2\u7269\u7406\u8BFE\u7A0B\u6BD4\u751F\u7269\u8BFE\u7A0B\u9AD8\u7684\u5B66\u751F\u7684\u5B66\u53F7(\u5206\u522B\u5F97\u5230\u7269\u7406\u6210\u7EE9\u8868\u4E0E\u751F\u7269\u6210\u7EE9\u8868\uFF0C\u7136\u540E\u8FDE\u8868\u5373\u53EF)","slug":"_8-\u67E5\u8BE2\u7269\u7406\u8BFE\u7A0B\u6BD4\u751F\u7269\u8BFE\u7A0B\u9AD8\u7684\u5B66\u751F\u7684\u5B66\u53F7-\u5206\u522B\u5F97\u5230\u7269\u7406\u6210\u7EE9\u8868\u4E0E\u751F\u7269\u6210\u7EE9\u8868\uFF0C\u7136\u540E\u8FDE\u8868\u5373\u53EF"},{"level":2,"title":"9.\u67E5\u8BE2\u6302\u79D1\u8D85\u8FC7\u4E24\u95E8(\u5305\u62EC\u4E24\u95E8)\u7684\u5B66\u751F\u59D3\u540D\u548C\u73ED\u7EA7","slug":"_9-\u67E5\u8BE2\u6302\u79D1\u8D85\u8FC7\u4E24\u95E8-\u5305\u62EC\u4E24\u95E8-\u7684\u5B66\u751F\u59D3\u540D\u548C\u73ED\u7EA7"},{"level":2,"title":"10\u3002\u67E5\u8BE2\u9009\u4FEE\u4E86\u6240\u6709\u8BFE\u7A0B\u7684\u5B66\u751F\u59D3\u540D","slug":"_10\u3002\u67E5\u8BE2\u9009\u4FEE\u4E86\u6240\u6709\u8BFE\u7A0B\u7684\u5B66\u751F\u59D3\u540D"},{"level":2,"title":"11.\u67E5\u8BE2\u674E\u5E73\u8001\u5E08\u6559\u7684\u8BFE\u7A0B\u7684\u6240\u6709\u6210\u7EE9\u8BB0\u5F55","slug":"_11-\u67E5\u8BE2\u674E\u5E73\u8001\u5E08\u6559\u7684\u8BFE\u7A0B\u7684\u6240\u6709\u6210\u7EE9\u8BB0\u5F55"},{"level":2,"title":"12.\u67E5\u8BE2\u5168\u90E8\u5B66\u751F\u90FD\u9009\u4FEE\u4E86\u7684\u8BFE\u7A0B\u53F7\u548C\u8BFE\u7A0B\u540D(\u53D6\u6240\u6709\u5B66\u751F\u6570\uFF0C\u7136\u540E\u57FA\u4E8Escore\u8868\u7684\u8BFE\u7A0B\u5206\u7EC4\uFF0C\u627E\u51FAcount(student_id)\u7B49\u4E8E\u5B66\u751F\u6570\u5373\u53EF)","slug":"_12-\u67E5\u8BE2\u5168\u90E8\u5B66\u751F\u90FD\u9009\u4FEE\u4E86\u7684\u8BFE\u7A0B\u53F7\u548C\u8BFE\u7A0B\u540D-\u53D6\u6240\u6709\u5B66\u751F\u6570\uFF0C\u7136\u540E\u57FA\u4E8Escore\u8868\u7684\u8BFE\u7A0B\u5206\u7EC4\uFF0C\u627E\u51FAcount-student-id-\u7B49\u4E8E\u5B66\u751F\u6570\u5373\u53EF"},{"level":2,"title":"13.\u67E5\u8BE2\u6BCF\u95E8\u8BFE\u7A0B\u88AB\u9009\u4FEE\u7684\u6B21\u6570","slug":"_13-\u67E5\u8BE2\u6BCF\u95E8\u8BFE\u7A0B\u88AB\u9009\u4FEE\u7684\u6B21\u6570"},{"level":2,"title":"15.\u67E5\u8BE2\u5E73\u5747\u6210\u7EE9\u5927\u4E8E85\u7684\u5B66\u751F\u59D3\u540D\u548C\u5E73\u5747\u6210\u7EE9","slug":"_15-\u67E5\u8BE2\u5E73\u5747\u6210\u7EE9\u5927\u4E8E85\u7684\u5B66\u751F\u59D3\u540D\u548C\u5E73\u5747\u6210\u7EE9"},{"level":2,"title":"16.\u67E5\u8BE2\u6CA1\u5B66\u8FC7\u674E\u5E73\u8001\u5E08\u8BFE\u7A0B\u7684\u5B66\u751F\u59D3\u540D\u4EE5\u53CA\u9009\u4FEE\u7684\u8BFE\u7A0B\u540D\u79F0","slug":"_16-\u67E5\u8BE2\u6CA1\u5B66\u8FC7\u674E\u5E73\u8001\u5E08\u8BFE\u7A0B\u7684\u5B66\u751F\u59D3\u540D\u4EE5\u53CA\u9009\u4FEE\u7684\u8BFE\u7A0B\u540D\u79F0"}],"relativePath":"tools/mysql/mysql.md","lastUpdated":1656666481000}'),p={name:"tools/mysql/mysql.md"},o=l("",69),e=[o];function C(c,r,t,y,A,D){return a(),n("div",null,e)}var b=s(p,[["render",C]]);export{i as __pageData,b as default};