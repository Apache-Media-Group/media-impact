# Peec AI API Documentation

## https://docs.peec.ai/api-reference/company/list-projects

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/company/list-projects#webpage","url":"https://docs.peec.ai/api-reference/company/list-projects","name":"List Projects","description":"List the projects of a company","dateModified":"2026-07-17T08:39:39.711Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/company/list-projects#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/company/list-projects#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"List Projects","item":"https://docs.peec.ai/api-reference/company/list-projects"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/company/list-projects#apireference","headline":"List Projects","name":"List Projects","description":"List the projects of a company","url":"https://docs.peec.ai/api-reference/company/list-projects","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/company/list-projects#webpage"},"dateModified":"2026-07-17T08:39:39.711Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Projects cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/projects \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "or_915e742b-396d-4a86-ad57-8bc84e8c2232" , 
 "name" : "Peec AI" , 
 "status" : "PITCH" , 
 "external_id" : "&#x3C;string>" , 
 "chat_interval_weekdays" : [ 
 123 
 ], 
 "chat_interval_month_days" : [ 
 123 
 ], 
 "created_at" : "2025-09-22" 
 } 
 ] 
 } 
```
 Company 

# List Projects

 List the projects of a company GET / projects Try it List Projects cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/projects \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "or_915e742b-396d-4a86-ad57-8bc84e8c2232" , 
 "name" : "Peec AI" , 
 "status" : "PITCH" , 
 "external_id" : "&#x3C;string>" , 
 "chat_interval_weekdays" : [ 
 123 
 ], 
 "chat_interval_month_days" : [ 
 123 
 ], 
 "created_at" : "2025-09-22" 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#parameter-external-id) external_id string [​ ](#parameter-start-date) start_date string&lt;date&gt; Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#parameter-end-date) end_date string&lt;date&gt; Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ Create Global Brand ](/api-reference/products/create-global-brand) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/create-categories

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/create-categories#webpage","url":"https://docs.peec.ai/api-reference/products/create-categories","name":"Create Categories","description":"Create product categories. Each item takes a name and an optional parent_id (omit or null for a top-level category). Items apply in order. Returns per-item results { created, rejected } — the batch never fails as a whole. Rejection reasons: parent_not_found, name_conflict (a sibling already has that name).","dateModified":"2026-07-17T08:39:39.184Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/create-categories#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/create-categories#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Create Categories","item":"https://docs.peec.ai/api-reference/products/create-categories"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/create-categories#apireference","headline":"Create Categories","name":"Create Categories","description":"Create product categories. Each item takes a name and an optional parent_id (omit or null for a top-level category). Items apply in order. Returns per-item results { created, rejected } — the batch never fails as a whole. Rejection reasons: parent_not_found, name_conflict (a sibling already has that name).","url":"https://docs.peec.ai/api-reference/products/create-categories","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/create-categories#webpage"},"dateModified":"2026-07-17T08:39:39.184Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Create Categories cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/categories/create \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;categories&quot;: [
 {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;parent_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;
 }
 ],
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/categories/create&quot;

payload = {
 &quot;categories&quot;: [
 {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;parent_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;
 }
 ],
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 categories: [{name: &#x27;&lt;string&gt;&#x27;, parent_id: &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;}],
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/categories/create&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/categories/create&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;categories&#x27; =&gt; [
 [
 &#x27;name&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;parent_id&#x27; =&gt; &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;
 ]
 ],
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/categories/create&quot;

	payload := strings.NewReader(&quot;{\n \&quot;categories\&quot;: [\n {\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;parent_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n }\n ],\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/categories/create&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;categories\&quot;: [\n {\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;parent_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n }\n ],\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/categories/create&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;categories\&quot;: [\n {\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;parent_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n }\n ],\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 
```
{
 &quot;created&quot;: [
 {
 &quot;category_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;,
 &quot;name&quot;: &quot;&lt;string&gt;&quot;
 }
 ],
 &quot;rejected&quot;: [
 {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
 }
 ]
}
```
 Products 

# Create Categories

 Create product categories. Each item takes a `name` and an optional `parent_id` (omit or null for a top-level category). Items apply in order. Returns per-item results — the batch never fails as a whole. Rejection reasons: parent_not_found, name_conflict (a sibling already has that name). POST / categories / create Try it Create Categories cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/categories/create \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;categories&quot;: [
 {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;parent_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;
 }
 ],
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/categories/create&quot;

payload = {
 &quot;categories&quot;: [
 {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;parent_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;
 }
 ],
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 categories: [{name: &#x27;&lt;string&gt;&#x27;, parent_id: &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;}],
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/categories/create&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/categories/create&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;categories&#x27; =&gt; [
 [
 &#x27;name&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;parent_id&#x27; =&gt; &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;
 ]
 ],
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/categories/create&quot;

	payload := strings.NewReader(&quot;{\n \&quot;categories\&quot;: [\n {\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;parent_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n }\n ],\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/categories/create&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;categories\&quot;: [\n {\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;parent_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n }\n ],\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/categories/create&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;categories\&quot;: [\n {\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;parent_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n }\n ],\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 
```
{
 &quot;created&quot;: [
 {
 &quot;category_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;,
 &quot;name&quot;: &quot;&lt;string&gt;&quot;
 }
 ],
 &quot;rejected&quot;: [
 {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
 }
 ]
}
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-categories) categories object[] required Required array length: `1 - 1000` element s Show child attributes [​ ](#body-project-id) project_id string Required if using a company api key Example : `&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;` 

## Response

 200 - application/json Per-item create results Per-item create results [​ ](#response-created) created object[] required Show child attributes [​ ](#response-rejected) rejected object[] required Show child attributes [ List Categories ](/api-reference/products/list-categories)[ Update Categories ](/api-reference/products/update-categories) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/create-global-brand

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/create-global-brand#webpage","url":"https://docs.peec.ai/api-reference/products/create-global-brand","name":"Create Global Brand","description":"Create a brand and return its id — pass it as a product's global_brand_id when creating products. The returned name is the brand's canonical name and may differ slightly from the name you sent. This is separate from POST /brands, which creates a brand a project tracks for AI-visibility reporting.","dateModified":"2026-07-17T08:39:39.225Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/create-global-brand#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/create-global-brand#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Create Global Brand","item":"https://docs.peec.ai/api-reference/products/create-global-brand"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/create-global-brand#apireference","headline":"Create Global Brand","name":"Create Global Brand","description":"Create a brand and return its id — pass it as a product's global_brand_id when creating products. The returned name is the brand's canonical name and may differ slightly from the name you sent. This is separate from POST /brands, which creates a brand a project tracks for AI-visibility reporting.","url":"https://docs.peec.ai/api-reference/products/create-global-brand","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/create-global-brand#webpage"},"dateModified":"2026-07-17T08:39:39.225Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Create Global Brand cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/global-brands \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "Nike", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "id" : "019ecb6e-d030-7222-b531-b371fe9db583" , 
 "name" : "Nike" 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/global-brands \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "Nike", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "id" : "019ecb6e-d030-7222-b531-b371fe9db583" , 
 "name" : "Nike" 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string required The brand name. Minimum string length: `1` Example : ` "Nike" ` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 application/json The brand The brand [​ ](#response-id) id string&lt;uuid&gt; required The global_brand_id — pass this as a product&#x27;s brand when creating products. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` Example : ` "019ecb6e-d030-7222-b531-b371fe9db583" ` [​ ](#response-name) name string required The brand&#x27;s canonical name. May differ slightly from the name you sent, since an existing brand is reused where one is found. Example : ` "Nike" ` [ List Global Brands ](/api-reference/products/list-global-brands)[ List Projects ](/api-reference/company/list-projects) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/create-products

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/create-products#webpage","url":"https://docs.peec.ai/api-reference/products/create-products","name":"Create Products","description":"Create products. Each item is independent: valid products are created and per-item failures are returned in rejected, so the batch never fails as a whole. Optional category_ids assigns the product to categories.","dateModified":"2026-07-17T08:39:39.144Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/create-products#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/create-products#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Create Products","item":"https://docs.peec.ai/api-reference/products/create-products"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/create-products#apireference","headline":"Create Products","name":"Create Products","description":"Create products. Each item is independent: valid products are created and per-item failures are returned in rejected, so the batch never fails as a whole. Optional category_ids assigns the product to categories.","url":"https://docs.peec.ai/api-reference/products/create-products","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/create-products#webpage"},"dateModified":"2026-07-17T08:39:39.144Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Create Products cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/create \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "products": [ 
 { 
 "global_brand_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "name": "&#x3C;string>", 
 "description": "&#x3C;string>", 
 "image_url": "&#x3C;string>", 
 "price_override": {}, 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ] 
 } 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "created" : [ 
 { 
 "product_id" : "&#x3C;string>" , 
 "name" : "&#x3C;string>" 
 } 
 ], 
 "rejected" : [ 
 { 
 "name" : "&#x3C;string>" , 
 "message" : "&#x3C;string>" 
 } 
 ] 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/create \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "products": [ 
 { 
 "global_brand_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "name": "&#x3C;string>", 
 "description": "&#x3C;string>", 
 "image_url": "&#x3C;string>", 
 "price_override": {}, 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ] 
 } 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "created" : [ 
 { 
 "product_id" : "&#x3C;string>" , 
 "name" : "&#x3C;string>" 
 } 
 ], 
 "rejected" : [ 
 { 
 "name" : "&#x3C;string>" , 
 "message" : "&#x3C;string>" 
 } 
 ] 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-products) products object[] required Required array length: `1 - 1000` element s Show child attributes [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 application/json Per-item create results Per-item create results [​ ](#response-created) created object[] required Show child attributes [​ ](#response-rejected) rejected object[] required Show child attributes [ List Merchants ](/api-reference/products/list-merchants)[ Update Products ](/api-reference/products/update-products) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/delete-categories

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/delete-categories#webpage","url":"https://docs.peec.ai/api-reference/products/delete-categories","name":"Delete Categories","description":"Delete categories by id. Each one's child categories and products move up to its parent, then it is removed. Returns per-item results { deleted, rejected } — the batch never fails as a whole. Rejection reasons: not_found, name_conflict (a child moving up would clash with an existing sibling name).","dateModified":"2026-07-17T08:39:39.205Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/delete-categories#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/delete-categories#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Delete Categories","item":"https://docs.peec.ai/api-reference/products/delete-categories"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/delete-categories#apireference","headline":"Delete Categories","name":"Delete Categories","description":"Delete categories by id. Each one's child categories and products move up to its parent, then it is removed. Returns per-item results { deleted, rejected } — the batch never fails as a whole. Rejection reasons: not_found, name_conflict (a child moving up would clash with an existing sibling name).","url":"https://docs.peec.ai/api-reference/products/delete-categories","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/delete-categories#webpage"},"dateModified":"2026-07-17T08:39:39.205Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Delete Categories cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/categories/delete \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "deleted" : [ 
 { 
 "category_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 } 
 ], 
 "rejected" : [ 
 { 
 "category_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" , 
 "message" : "&#x3C;string>" 
 } 
 ] 
 } 
```
 Products 

# Delete Categories

 Delete categories by id. Each one’s child categories and products move up to its parent, then it is removed. Returns per-item results — the batch never fails as a whole. Rejection reasons: not_found, name_conflict (a child moving up would clash with an existing sibling name). POST / categories / delete Try it Delete Categories cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/categories/delete \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "deleted" : [ 
 { 
 "category_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 } 
 ], 
 "rejected" : [ 
 { 
 "category_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" , 
 "message" : "&#x3C;string>" 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-category-ids) category_ids string&lt;uuid&gt;[] required Required array length: `1 - 1000` element s Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 - application/json Per-item delete results Per-item delete results [​ ](#response-deleted) deleted object[] required Show child attributes [​ ](#response-rejected) rejected object[] required Show child attributes [ Update Categories ](/api-reference/products/update-categories)[ List Global Brands ](/api-reference/products/list-global-brands) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/delete-products

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/delete-products#webpage","url":"https://docs.peec.ai/api-reference/products/delete-products","name":"Delete Products","description":"Delete products. Ids that don't exist in the project are returned in skipped.","dateModified":"2026-07-17T08:39:39.164Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/delete-products#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/delete-products#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Delete Products","item":"https://docs.peec.ai/api-reference/products/delete-products"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/delete-products#apireference","headline":"Delete Products","name":"Delete Products","description":"Delete products. Ids that don't exist in the project are returned in skipped.","url":"https://docs.peec.ai/api-reference/products/delete-products","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/delete-products#webpage"},"dateModified":"2026-07-17T08:39:39.164Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Delete Products cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/delete \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "deleted" : [ 
 { 
 "product_id" : "&#x3C;string>" 
 } 
 ], 
 "skipped" : [ 
 { 
 "product_id" : "&#x3C;string>" , 
 "reason" : "not_found" 
 } 
 ] 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/delete \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "deleted" : [ 
 { 
 "product_id" : "&#x3C;string>" 
 } 
 ], 
 "skipped" : [ 
 { 
 "product_id" : "&#x3C;string>" , 
 "reason" : "not_found" 
 } 
 ] 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-product-ids) product_ids string&lt;uuid&gt;[] required Required array length: `1 - 1000` element s Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 application/json Per-item delete results Per-item delete results [​ ](#response-deleted) deleted object[] required Show child attributes [​ ](#response-skipped) skipped object[] required Show child attributes [ Update Products ](/api-reference/products/update-products)[ List Categories ](/api-reference/products/list-categories) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/get-product

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/get-product#webpage","url":"https://docs.peec.ai/api-reference/products/get-product","name":"Get Product","description":"Get one product's detail over a date range: headline metrics (visibility, win_rate, avg_position, avg_rating, mention_count) plus a delta for each against the immediately preceding equal-length period, the catalog metadata (brand, description, image, source, first-seen date), the effective price range with any overrides, and the median AI-mention price. Visibility is divided by the product's relevant-prompt chats, not all shopping chats. avg_rating is the mean 0–5 star rating across the product's AI mentions (null when none carried a rating). Returns data: null when the product is not in the project.","dateModified":"2026-07-17T08:39:39.073Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/get-product#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/get-product#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Get Product","item":"https://docs.peec.ai/api-reference/products/get-product"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/get-product#apireference","headline":"Get Product","name":"Get Product","description":"Get one product's detail over a date range: headline metrics (visibility, win_rate, avg_position, avg_rating, mention_count) plus a delta for each against the immediately preceding equal-length period, the catalog metadata (brand, description, image, source, first-seen date), the effective price range with any overrides, and the median AI-mention price. Visibility is divided by the product's relevant-prompt chats, not all shopping chats. avg_rating is the mean 0–5 star rating across the product's AI mentions (null when none carried a rating). Returns data: null when the product is not in the project.","url":"https://docs.peec.ai/api-reference/products/get-product","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/get-product#webpage"},"dateModified":"2026-07-17T08:39:39.073Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get Product cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/detail \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "product_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [ 
 "&#x3C;string>" 
 ], 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ] 
 } 
 ' 
```

```
 { 
 "data" : { 
 "id" : "&#x3C;string>" , 
 "name" : "&#x3C;string>" , 
 "brand" : "&#x3C;string>" , 
 "first_seen_at" : "&#x3C;string>" , 
 "visibility" : 123 , 
 "visibility_delta" : 123 , 
 "win_rate" : 123 , 
 "win_rate_delta" : 123 , 
 "avg_position" : 123 , 
 "avg_position_delta" : 123 , 
 "avg_rating" : 123 , 
 "avg_rating_delta" : 123 , 
 "mention_count" : 123 , 
 "mention_count_delta" : 123 , 
 "description" : "&#x3C;string>" , 
 "image_url" : "&#x3C;string>" , 
 "price_range" : {}, 
 "price_override" : {}, 
 "ai_price_map" : {}, 
 "ai_price_delta_map" : {}, 
 "fanout_queries" : [ 
 { 
 "query_text" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "shopping_queries" : [ 
 { 
 "query_text" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "fanout_query_terms" : [ 
 { 
 "term" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "shopping_query_terms" : [ 
 { 
 "term" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "variants" : [ 
 { 
 "id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" , 
 "name" : "&#x3C;string>" , 
 "priceMap" : {} 
 } 
 ] 
 }, 
 "primary_currency" : "&#x3C;string>" 
 } 
```
 Products 

# Get Product

 Get one product’s detail over a date range: headline metrics (visibility, win_rate, avg_position, avg_rating, mention_count) plus a delta for each against the immediately preceding equal-length period, the catalog metadata (brand, description, image, source, first-seen date), the effective price range with any overrides, and the median AI-mention price. Visibility is divided by the product’s relevant-prompt chats, not all shopping chats. avg_rating is the mean 0–5 star rating across the product’s AI mentions (null when none carried a rating). Returns data: null when the product is not in the project. POST / products / detail Try it Get Product cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/detail \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "product_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [ 
 "&#x3C;string>" 
 ], 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ] 
 } 
 ' 
```

```
 { 
 "data" : { 
 "id" : "&#x3C;string>" , 
 "name" : "&#x3C;string>" , 
 "brand" : "&#x3C;string>" , 
 "first_seen_at" : "&#x3C;string>" , 
 "visibility" : 123 , 
 "visibility_delta" : 123 , 
 "win_rate" : 123 , 
 "win_rate_delta" : 123 , 
 "avg_position" : 123 , 
 "avg_position_delta" : 123 , 
 "avg_rating" : 123 , 
 "avg_rating_delta" : 123 , 
 "mention_count" : 123 , 
 "mention_count_delta" : 123 , 
 "description" : "&#x3C;string>" , 
 "image_url" : "&#x3C;string>" , 
 "price_range" : {}, 
 "price_override" : {}, 
 "ai_price_map" : {}, 
 "ai_price_delta_map" : {}, 
 "fanout_queries" : [ 
 { 
 "query_text" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "shopping_queries" : [ 
 { 
 "query_text" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "fanout_query_terms" : [ 
 { 
 "term" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "shopping_query_terms" : [ 
 { 
 "term" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "variants" : [ 
 { 
 "id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" , 
 "name" : "&#x3C;string>" , 
 "priceMap" : {} 
 } 
 ] 
 }, 
 "primary_currency" : "&#x3C;string>" 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-product-id) product_id string&lt;uuid&gt; required Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-country-codes) country_codes string[] [​ ](#body-model-channel-ids) model_channel_ids string[] [​ ](#body-merchant-ids) merchant_ids string&lt;uuid&gt;[] Scope the response to chats where this product is sold through one of these merchants — the per-merchant view of rating, price, and mentions. The QFO breakdowns scope through those chats too; only the visibility denominator stays merchant-free. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-topic-ids) topic_ids string[] [​ ](#body-tag-ids) tag_ids string[] [​ ](#body-tag-operator) tag_operator enum&lt;string&gt; Available options : `and`, `or` [​ ](#body-chat-scope) chat_scope enum&lt;string&gt; Which chats the visibility denominator counts: every in-scope chat (&#x27;all&#x27;) or only product-gallery (&#x27;shopping&#x27;) chats. Defaults to &#x27;shopping&#x27;. Available options : `all`, `shopping` 

## Response

 200 - application/json A single product&#x27;s detail metrics over the date range, with deltas against the immediately preceding period. ` data ` is null when the product does not exist in the project. Beyond the always-present identity and headline metrics, ` data ` carries optional extras — description, image, price/currency maps, the QFO breakdowns (fanout_queries, shopping_queries, and their *_terms n-gram variants, each capped at 25 entries) that surface the top queries and terms that mentioned this product, and ` variants ` (the product&#x27;s live catalog variants — id, name, and a per-currency priceMap — capped at 50 with no pagination). A single product&#x27;s detail metrics over the date range, with deltas against the immediately preceding period. ` data ` is null when the product does not exist in the project. Beyond the always-present identity and headline metrics, ` data ` carries optional extras — description, image, price/currency maps, the QFO breakdowns (fanout_queries, shopping_queries, and their *_terms n-gram variants, each capped at 25 entries) that surface the top queries and terms that mentioned this product, and ` variants ` (the product&#x27;s live catalog variants — id, name, and a per-currency priceMap — capped at 50 with no pagination). [​ ](#response-data-one-of-0) data object | null required Show child attributes [​ ](#response-primary-currency) primary_currency string Pattern: `^[A-Z]{3}$` [ List Products ](/api-reference/products/list-products)[ Get Shopping Attributes ](/api-reference/products/get-shopping-attributes) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/get-shopping-attributes

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/get-shopping-attributes#webpage","url":"https://docs.peec.ai/api-reference/products/get-shopping-attributes","name":"Get Shopping Attributes","description":"The LLM-extracted attribute comparison grid for a product (scope=product) or the whole catalog (scope=overview), split by tab into characteristics, facts, and dimensions. Columns are competing brands (compare_by=brand) or competing products (compare_by=product, scope=product only). Deltas are computed against an explicit comparison window (previous_start_date/previous_end_date) or the equal-length window immediately before.","dateModified":"2026-07-17T08:39:39.083Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/get-shopping-attributes#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/get-shopping-attributes#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Get Shopping Attributes","item":"https://docs.peec.ai/api-reference/products/get-shopping-attributes"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/get-shopping-attributes#apireference","headline":"Get Shopping Attributes","name":"Get Shopping Attributes","description":"The LLM-extracted attribute comparison grid for a product (scope=product) or the whole catalog (scope=overview), split by tab into characteristics, facts, and dimensions. Columns are competing brands (compare_by=brand) or competing products (compare_by=product, scope=product only). Deltas are computed against an explicit comparison window (previous_start_date/previous_end_date) or the equal-length window immediately before.","url":"https://docs.peec.ai/api-reference/products/get-shopping-attributes","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/get-shopping-attributes#webpage"},"dateModified":"2026-07-17T08:39:39.083Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get Shopping Attributes cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/products/attributes \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;start_date&quot;: &quot;2025-09-22&quot;,
 &quot;end_date&quot;: &quot;2025-09-22&quot;,
 &quot;previous_start_date&quot;: &quot;2023-12-25&quot;,
 &quot;previous_end_date&quot;: &quot;2023-12-25&quot;,
 &quot;scope&quot;: &quot;product&quot;,
 &quot;compare_by&quot;: &quot;brand&quot;,
 &quot;tab&quot;: &quot;characteristics&quot;,
 &quot;product_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;,
 &quot;category_ids&quot;: [
 &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;
 ],
 &quot;country_codes&quot;: [],
 &quot;model_ids&quot;: [],
 &quot;model_channel_ids&quot;: [],
 &quot;topic_ids&quot;: [
 &quot;&lt;string&gt;&quot;
 ],
 &quot;tag_ids&quot;: [
 &quot;&lt;string&gt;&quot;
 ],
 &quot;search&quot;: &quot;&lt;string&gt;&quot;,
 &quot;competitor_count&quot;: 10,
 &quot;values_per_group&quot;: 25,
 &quot;limit&quot;: 50,
 &quot;offset&quot;: 4503599627370495
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/products/attributes&quot;

payload = {
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;start_date&quot;: &quot;2025-09-22&quot;,
 &quot;end_date&quot;: &quot;2025-09-22&quot;,
 &quot;previous_start_date&quot;: &quot;2023-12-25&quot;,
 &quot;previous_end_date&quot;: &quot;2023-12-25&quot;,
 &quot;scope&quot;: &quot;product&quot;,
 &quot;compare_by&quot;: &quot;brand&quot;,
 &quot;tab&quot;: &quot;characteristics&quot;,
 &quot;product_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;,
 &quot;category_ids&quot;: [&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;],
 &quot;country_codes&quot;: [],
 &quot;model_ids&quot;: [],
 &quot;model_channel_ids&quot;: [],
 &quot;topic_ids&quot;: [&quot;&lt;string&gt;&quot;],
 &quot;tag_ids&quot;: [&quot;&lt;string&gt;&quot;],
 &quot;search&quot;: &quot;&lt;string&gt;&quot;,
 &quot;competitor_count&quot;: 10,
 &quot;values_per_group&quot;: 25,
 &quot;limit&quot;: 50,
 &quot;offset&quot;: 4503599627370495
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 start_date: &#x27;2025-09-22&#x27;,
 end_date: &#x27;2025-09-22&#x27;,
 previous_start_date: &#x27;2023-12-25&#x27;,
 previous_end_date: &#x27;2023-12-25&#x27;,
 scope: &#x27;product&#x27;,
 compare_by: &#x27;brand&#x27;,
 tab: &#x27;characteristics&#x27;,
 product_id: &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;,
 category_ids: [&#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;],
 country_codes: [],
 model_ids: [],
 model_channel_ids: [],
 topic_ids: [&#x27;&lt;string&gt;&#x27;],
 tag_ids: [&#x27;&lt;string&gt;&#x27;],
 search: &#x27;&lt;string&gt;&#x27;,
 competitor_count: 10,
 values_per_group: 25,
 limit: 50,
 offset: 4503599627370495
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/products/attributes&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/products/attributes&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 &#x27;start_date&#x27; =&gt; &#x27;2025-09-22&#x27;,
 &#x27;end_date&#x27; =&gt; &#x27;2025-09-22&#x27;,
 &#x27;previous_start_date&#x27; =&gt; &#x27;2023-12-25&#x27;,
 &#x27;previous_end_date&#x27; =&gt; &#x27;2023-12-25&#x27;,
 &#x27;scope&#x27; =&gt; &#x27;product&#x27;,
 &#x27;compare_by&#x27; =&gt; &#x27;brand&#x27;,
 &#x27;tab&#x27; =&gt; &#x27;characteristics&#x27;,
 &#x27;product_id&#x27; =&gt; &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;,
 &#x27;category_ids&#x27; =&gt; [
 &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;
 ],
 &#x27;country_codes&#x27; =&gt; [

 ],
 &#x27;model_ids&#x27; =&gt; [

 ],
 &#x27;model_channel_ids&#x27; =&gt; [

 ],
 &#x27;topic_ids&#x27; =&gt; [
 &#x27;&lt;string&gt;&#x27;
 ],
 &#x27;tag_ids&#x27; =&gt; [
 &#x27;&lt;string&gt;&#x27;
 ],
 &#x27;search&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;competitor_count&#x27; =&gt; 10,
 &#x27;values_per_group&#x27; =&gt; 25,
 &#x27;limit&#x27; =&gt; 50,
 &#x27;offset&#x27; =&gt; 4503599627370495
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/products/attributes&quot;

	payload := strings.NewReader(&quot;{\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;start_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;end_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;previous_start_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;previous_end_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;scope\&quot;: \&quot;product\&quot;,\n \&quot;compare_by\&quot;: \&quot;brand\&quot;,\n \&quot;tab\&quot;: \&quot;characteristics\&quot;,\n \&quot;product_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;,\n \&quot;category_ids\&quot;: [\n \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n ],\n \&quot;country_codes\&quot;: [],\n \&quot;model_ids\&quot;: [],\n \&quot;model_channel_ids\&quot;: [],\n \&quot;topic_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;tag_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;search\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;competitor_count\&quot;: 10,\n \&quot;values_per_group\&quot;: 25,\n \&quot;limit\&quot;: 50,\n \&quot;offset\&quot;: 4503599627370495\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/products/attributes&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;start_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;end_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;previous_start_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;previous_end_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;scope\&quot;: \&quot;product\&quot;,\n \&quot;compare_by\&quot;: \&quot;brand\&quot;,\n \&quot;tab\&quot;: \&quot;characteristics\&quot;,\n \&quot;product_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;,\n \&quot;category_ids\&quot;: [\n \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n ],\n \&quot;country_codes\&quot;: [],\n \&quot;model_ids\&quot;: [],\n \&quot;model_channel_ids\&quot;: [],\n \&quot;topic_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;tag_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;search\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;competitor_count\&quot;: 10,\n \&quot;values_per_group\&quot;: 25,\n \&quot;limit\&quot;: 50,\n \&quot;offset\&quot;: 4503599627370495\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/products/attributes&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;start_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;end_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;previous_start_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;previous_end_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;scope\&quot;: \&quot;product\&quot;,\n \&quot;compare_by\&quot;: \&quot;brand\&quot;,\n \&quot;tab\&quot;: \&quot;characteristics\&quot;,\n \&quot;product_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;,\n \&quot;category_ids\&quot;: [\n \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n ],\n \&quot;country_codes\&quot;: [],\n \&quot;model_ids\&quot;: [],\n \&quot;model_channel_ids\&quot;: [],\n \&quot;topic_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;tag_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;search\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;competitor_count\&quot;: 10,\n \&quot;values_per_group\&quot;: 25,\n \&quot;limit\&quot;: 50,\n \&quot;offset\&quot;: 4503599627370495\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 
```
{
 &quot;competitors&quot;: [
 {
 &quot;global_brand_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;,
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;domain&quot;: &quot;&lt;string&gt;&quot;,
 &quot;mentions&quot;: 123
 }
 ],
 &quot;total_groups&quot;: 123,
 &quot;tab&quot;: &quot;characteristics&quot;,
 &quot;groups&quot;: [
 {
 &quot;dimension_id&quot;: &quot;&lt;string&gt;&quot;,
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;total_mentions&quot;: 123,
 &quot;total_mentions_delta&quot;: 123,
 &quot;value_count&quot;: 123,
 &quot;values&quot;: [
 {
 &quot;value&quot;: &quot;&lt;string&gt;&quot;,
 &quot;mentions&quot;: 123,
 &quot;mentions_delta&quot;: 123,
 &quot;competitor_mentions&quot;: [
 123
 ]
 }
 ]
 }
 ]
}
```
 Products 

# Get Shopping Attributes

 The LLM-extracted attribute comparison grid for a product (scope=product) or the whole catalog (scope=overview), split by tab into characteristics, facts, and dimensions. Columns are competing brands (compare_by=brand) or competing products (compare_by=product, scope=product only). Deltas are computed against an explicit comparison window (previous_start_date/previous_end_date) or the equal-length window immediately before. POST / products / attributes Try it Get Shopping Attributes cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/products/attributes \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;start_date&quot;: &quot;2025-09-22&quot;,
 &quot;end_date&quot;: &quot;2025-09-22&quot;,
 &quot;previous_start_date&quot;: &quot;2023-12-25&quot;,
 &quot;previous_end_date&quot;: &quot;2023-12-25&quot;,
 &quot;scope&quot;: &quot;product&quot;,
 &quot;compare_by&quot;: &quot;brand&quot;,
 &quot;tab&quot;: &quot;characteristics&quot;,
 &quot;product_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;,
 &quot;category_ids&quot;: [
 &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;
 ],
 &quot;country_codes&quot;: [],
 &quot;model_ids&quot;: [],
 &quot;model_channel_ids&quot;: [],
 &quot;topic_ids&quot;: [
 &quot;&lt;string&gt;&quot;
 ],
 &quot;tag_ids&quot;: [
 &quot;&lt;string&gt;&quot;
 ],
 &quot;search&quot;: &quot;&lt;string&gt;&quot;,
 &quot;competitor_count&quot;: 10,
 &quot;values_per_group&quot;: 25,
 &quot;limit&quot;: 50,
 &quot;offset&quot;: 4503599627370495
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/products/attributes&quot;

payload = {
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;start_date&quot;: &quot;2025-09-22&quot;,
 &quot;end_date&quot;: &quot;2025-09-22&quot;,
 &quot;previous_start_date&quot;: &quot;2023-12-25&quot;,
 &quot;previous_end_date&quot;: &quot;2023-12-25&quot;,
 &quot;scope&quot;: &quot;product&quot;,
 &quot;compare_by&quot;: &quot;brand&quot;,
 &quot;tab&quot;: &quot;characteristics&quot;,
 &quot;product_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;,
 &quot;category_ids&quot;: [&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;],
 &quot;country_codes&quot;: [],
 &quot;model_ids&quot;: [],
 &quot;model_channel_ids&quot;: [],
 &quot;topic_ids&quot;: [&quot;&lt;string&gt;&quot;],
 &quot;tag_ids&quot;: [&quot;&lt;string&gt;&quot;],
 &quot;search&quot;: &quot;&lt;string&gt;&quot;,
 &quot;competitor_count&quot;: 10,
 &quot;values_per_group&quot;: 25,
 &quot;limit&quot;: 50,
 &quot;offset&quot;: 4503599627370495
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 start_date: &#x27;2025-09-22&#x27;,
 end_date: &#x27;2025-09-22&#x27;,
 previous_start_date: &#x27;2023-12-25&#x27;,
 previous_end_date: &#x27;2023-12-25&#x27;,
 scope: &#x27;product&#x27;,
 compare_by: &#x27;brand&#x27;,
 tab: &#x27;characteristics&#x27;,
 product_id: &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;,
 category_ids: [&#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;],
 country_codes: [],
 model_ids: [],
 model_channel_ids: [],
 topic_ids: [&#x27;&lt;string&gt;&#x27;],
 tag_ids: [&#x27;&lt;string&gt;&#x27;],
 search: &#x27;&lt;string&gt;&#x27;,
 competitor_count: 10,
 values_per_group: 25,
 limit: 50,
 offset: 4503599627370495
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/products/attributes&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/products/attributes&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 &#x27;start_date&#x27; =&gt; &#x27;2025-09-22&#x27;,
 &#x27;end_date&#x27; =&gt; &#x27;2025-09-22&#x27;,
 &#x27;previous_start_date&#x27; =&gt; &#x27;2023-12-25&#x27;,
 &#x27;previous_end_date&#x27; =&gt; &#x27;2023-12-25&#x27;,
 &#x27;scope&#x27; =&gt; &#x27;product&#x27;,
 &#x27;compare_by&#x27; =&gt; &#x27;brand&#x27;,
 &#x27;tab&#x27; =&gt; &#x27;characteristics&#x27;,
 &#x27;product_id&#x27; =&gt; &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;,
 &#x27;category_ids&#x27; =&gt; [
 &#x27;3c90c3cc-0d44-4b50-8888-8dd25736052a&#x27;
 ],
 &#x27;country_codes&#x27; =&gt; [

 ],
 &#x27;model_ids&#x27; =&gt; [

 ],
 &#x27;model_channel_ids&#x27; =&gt; [

 ],
 &#x27;topic_ids&#x27; =&gt; [
 &#x27;&lt;string&gt;&#x27;
 ],
 &#x27;tag_ids&#x27; =&gt; [
 &#x27;&lt;string&gt;&#x27;
 ],
 &#x27;search&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;competitor_count&#x27; =&gt; 10,
 &#x27;values_per_group&#x27; =&gt; 25,
 &#x27;limit&#x27; =&gt; 50,
 &#x27;offset&#x27; =&gt; 4503599627370495
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/products/attributes&quot;

	payload := strings.NewReader(&quot;{\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;start_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;end_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;previous_start_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;previous_end_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;scope\&quot;: \&quot;product\&quot;,\n \&quot;compare_by\&quot;: \&quot;brand\&quot;,\n \&quot;tab\&quot;: \&quot;characteristics\&quot;,\n \&quot;product_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;,\n \&quot;category_ids\&quot;: [\n \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n ],\n \&quot;country_codes\&quot;: [],\n \&quot;model_ids\&quot;: [],\n \&quot;model_channel_ids\&quot;: [],\n \&quot;topic_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;tag_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;search\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;competitor_count\&quot;: 10,\n \&quot;values_per_group\&quot;: 25,\n \&quot;limit\&quot;: 50,\n \&quot;offset\&quot;: 4503599627370495\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/products/attributes&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;start_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;end_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;previous_start_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;previous_end_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;scope\&quot;: \&quot;product\&quot;,\n \&quot;compare_by\&quot;: \&quot;brand\&quot;,\n \&quot;tab\&quot;: \&quot;characteristics\&quot;,\n \&quot;product_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;,\n \&quot;category_ids\&quot;: [\n \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n ],\n \&quot;country_codes\&quot;: [],\n \&quot;model_ids\&quot;: [],\n \&quot;model_channel_ids\&quot;: [],\n \&quot;topic_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;tag_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;search\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;competitor_count\&quot;: 10,\n \&quot;values_per_group\&quot;: 25,\n \&quot;limit\&quot;: 50,\n \&quot;offset\&quot;: 4503599627370495\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/products/attributes&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;start_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;end_date\&quot;: \&quot;2025-09-22\&quot;,\n \&quot;previous_start_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;previous_end_date\&quot;: \&quot;2023-12-25\&quot;,\n \&quot;scope\&quot;: \&quot;product\&quot;,\n \&quot;compare_by\&quot;: \&quot;brand\&quot;,\n \&quot;tab\&quot;: \&quot;characteristics\&quot;,\n \&quot;product_id\&quot;: \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;,\n \&quot;category_ids\&quot;: [\n \&quot;3c90c3cc-0d44-4b50-8888-8dd25736052a\&quot;\n ],\n \&quot;country_codes\&quot;: [],\n \&quot;model_ids\&quot;: [],\n \&quot;model_channel_ids\&quot;: [],\n \&quot;topic_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;tag_ids\&quot;: [\n \&quot;&lt;string&gt;\&quot;\n ],\n \&quot;search\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;competitor_count\&quot;: 10,\n \&quot;values_per_group\&quot;: 25,\n \&quot;limit\&quot;: 50,\n \&quot;offset\&quot;: 4503599627370495\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 
```
{
 &quot;competitors&quot;: [
 {
 &quot;global_brand_id&quot;: &quot;3c90c3cc-0d44-4b50-8888-8dd25736052a&quot;,
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;domain&quot;: &quot;&lt;string&gt;&quot;,
 &quot;mentions&quot;: 123
 }
 ],
 &quot;total_groups&quot;: 123,
 &quot;tab&quot;: &quot;characteristics&quot;,
 &quot;groups&quot;: [
 {
 &quot;dimension_id&quot;: &quot;&lt;string&gt;&quot;,
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;total_mentions&quot;: 123,
 &quot;total_mentions_delta&quot;: 123,
 &quot;value_count&quot;: 123,
 &quot;values&quot;: [
 {
 &quot;value&quot;: &quot;&lt;string&gt;&quot;,
 &quot;mentions&quot;: 123,
 &quot;mentions_delta&quot;: 123,
 &quot;competitor_mentions&quot;: [
 123
 ]
 }
 ]
 }
 ]
}
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-project-id) project_id string Required if using a company api key Example : `&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : `&quot;2025-09-22&quot;` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : `&quot;2025-09-22&quot;` [​ ](#body-previous-start-date) previous_start_date string&lt;date&gt; Start of an explicit comparison window for deltas. Provide together with previous_end_date, or omit both to auto-derive an equal-length window immediately before [start_date, end_date]. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-previous-end-date) previous_end_date string&lt;date&gt; End of the explicit comparison window. Provide together with previous_start_date, or omit both to auto-derive. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-scope) scope enum&lt;string&gt; default: product `product` compares one product (needs product_id); `overview` compares the whole catalog. Available options : `product`, `overview` [​ ](#body-compare-by) compare_by enum&lt;string&gt; default: brand Grid columns: competing `brand`s, or competing `product`s. `product` is only valid when scope=product. Available options : `brand`, `product` [​ ](#body-tab) tab enum&lt;string&gt; default: characteristics `characteristics` (qualitative values), `facts` (true/false), `dimensions` (ordinal ratings). Available options : `characteristics`, `facts`, `dimensions` [​ ](#body-product-id) product_id string&lt;uuid&gt; Required when scope=product. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-category-ids) category_ids string&lt;uuid&gt;[] Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-country-codes) country_codes enum&lt;string&gt;[] Available options : `AE`, `AL`, `AM`, `AR`, `AT`, `AU`, `BA`, `BE`, `BG`, `BH`, `BO`, `BR`, `BS`, `BY`, `CA`, `CH`, `CL`, `CN`, `CO`, `CR`, `CY`, `CZ`, `DE`, `DK`, `DO`, `EC`, `EE`, `EG`, `ES`, `FI`, `FR`, `GB`, `GE`, `GH`, `GR`, `GT`, `HK`, `HN`, `HR`, `HU`, `ID`, `IE`, `IL`, `IN`, `IQ`, `IS`, `IT`, `JO`, `JP`, `KR`, `KW`, `LB`, `LI`, `LT`, `LU`, `LV`, `MA`, `MD`, `ME`, `MK`, `MT`, `MX`, `MY`, `NG`, `NI`, `NL`, `NO`, `NZ`, `OM`, `PK`, `PA`, `PE`, `PH`, `PL`, `PT`, `PY`, `PS`, `QA`, `RO`, `RS`, `SA`, `SE`, `SG`, `SI`, `SK`, `SV`, `TH`, `TN`, `TR`, `TW`, `UA`, `US`, `UY`, `VE`, `VN`, `ZA`, `AD`, `AF`, `AS`, `AZ`, `BB`, `BQ`, `CG`, `CI`, `CM`, `CW`, `DM`, `DZ`, `FO`, `GF`, `GP`, `JM`, `KG`, `KH`, `KI`, `KZ`, `LK`, `LR`, `LS`, `MW`, `NC`, `PG`, `TD`, `TF`, `UG`, `VU`, `ZW` [​ ](#body-model-ids) model_ids enum&lt;string&gt;[] Available options : `chatgpt`, `microsoft-copilot`, `sonar-api`, `grok-api`, `gpt-4o-search`, `sonar`, `google-ai-overview`, `google-ai-mode`, `gemini-2-5-flash`, `gemini-3-1-flash-lite`, `gemini-3-1-flash-lite-search`, `claude-sonnet-4`, `claude-sonnet-4-6`, `claude-haiku-4-5`, `grok-2-1212`, `gpt-4o`, `qwen-3-6-plus`, `qwen-3-7-plus`, `gpt-3-5-turbo`, `gemini-1-5-flash`, `deepseek-r1`, `deepseek-v4-pro`, `llama-3-3-70b-instruct`, `gpt-5-1`, `gemini-2-5-flash-preview-05-20`, `claude-3-5-sonnet`, `chatgpt-ui`, `gpt-5-search`, `gpt-5-6-luna`, `perplexity-ui`, `gemini-ui`, `grok-4`, `grok-4-3`, `grok-ui`, `microsoft-copilot-ui`, `claude-3-5-haiku`, `llama-3-1-sonar-small-128k-online`, `amazon-rufus`, `mistral-small-4`, `mistral-medium-3-5` [​ ](#body-model-channel-ids) model_channel_ids enum&lt;string&gt;[] Available options : `openai-0`, `openai-1`, `qwen-0`, `openai-2`, `perplexity-0`, `perplexity-1`, `google-0`, `google-1`, `google-2`, `google-3`, `google-4`, `anthropic-0`, `anthropic-1`, `deepseek-0`, `meta-0`, `xai-0`, `xai-1`, `microsoft-0`, `amazon-0`, `mistral-0`, `mistral-1` [​ ](#body-topic-ids) topic_ids string[] [​ ](#body-tag-ids) tag_ids string[] [​ ](#body-tag-operator) tag_operator enum&lt;string&gt; Available options : `and`, `or` [​ ](#body-search) search string Substring match on dimension name (and value, characteristics). [​ ](#body-competitor-count) competitor_count integer Grid columns; default 6. `0` disables competitor lookup. Required range : `0 &lt;= x &lt;= 20` [​ ](#body-values-per-group) values_per_group integer Characteristics tab only; default 12. Required range : `1 &lt;= x &lt;= 50` [​ ](#body-limit) limit integer Page size over dimension groups. Required range : `1 &lt;= x &lt;= 100` [​ ](#body-offset) offset integer Required range : `0 &lt;= x &lt;= 9007199254740991` 

## Response

 200 - application/json Response for status 200 Option 1 Option 2 Option 3 [​ ](#response-one-of-0-competitors) competitors object[] required Option 1 Option 2 Show child attributes [​ ](#response-one-of-0-total-groups) total_groups number required [​ ](#response-one-of-0-tab) tab enum&lt;string&gt; required Available options : `characteristics` [​ ](#response-one-of-0-groups) groups object[] required Show child attributes [ Get Product ](/api-reference/products/get-product)[ Get Shopping Summary ](/api-reference/products/get-shopping-summary) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/get-shopping-summary

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/get-shopping-summary#webpage","url":"https://docs.peec.ai/api-reference/products/get-shopping-summary","name":"Get Shopping Summary","description":"Return aggregate shopping metrics over a date range. Delta fields compare against an explicit previous window or the auto-derived previous period.","dateModified":"2026-07-17T08:39:39.093Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/get-shopping-summary#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/get-shopping-summary#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Get Shopping Summary","item":"https://docs.peec.ai/api-reference/products/get-shopping-summary"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/get-shopping-summary#apireference","headline":"Get Shopping Summary","name":"Get Shopping Summary","description":"Return aggregate shopping metrics over a date range. Delta fields compare against an explicit previous window or the auto-derived previous period.","url":"https://docs.peec.ai/api-reference/products/get-shopping-summary","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/get-shopping-summary#webpage"},"dateModified":"2026-07-17T08:39:39.093Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get Shopping Summary cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/summary \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "previous_start_date": "2023-12-25", 
 "previous_end_date": "2023-12-25", 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "brand_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ] 
 } 
 ' 
```

```
 { 
 "avg_visibility" : 123 , 
 "avg_visibility_delta" : 123 , 
 "avg_win_rate" : 123 , 
 "avg_win_rate_delta" : 123 , 
 "avg_position" : 123 , 
 "avg_position_delta" : 123 
 } 
```
 Products 

# Get Shopping Summary

 Return aggregate shopping metrics over a date range. Delta fields compare against an explicit previous window or the auto-derived previous period. POST / products / summary Try it Get Shopping Summary cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/summary \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "previous_start_date": "2023-12-25", 
 "previous_end_date": "2023-12-25", 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "brand_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ] 
 } 
 ' 
```

```
 { 
 "avg_visibility" : 123 , 
 "avg_visibility_delta" : 123 , 
 "avg_win_rate" : 123 , 
 "avg_win_rate_delta" : 123 , 
 "avg_position" : 123 , 
 "avg_position_delta" : 123 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-category-ids) category_ids string&lt;uuid&gt;[] Filter by shopping categories. Parent categories include descendants. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-country-codes) country_codes string[] [​ ](#body-model-channel-ids) model_channel_ids enum&lt;string&gt;[] Available options : `openai-0`, `openai-1`, `qwen-0`, `openai-2`, `perplexity-0`, `perplexity-1`, `google-0`, `google-1`, `google-2`, `google-3`, `google-4`, `anthropic-0`, `anthropic-1`, `deepseek-0`, `meta-0`, `xai-0`, `xai-1`, `microsoft-0`, `amazon-0`, `mistral-0`, `mistral-1` [​ ](#body-topic-ids) topic_ids string[] [​ ](#body-tag-ids) tag_ids string[] [​ ](#body-tag-operator) tag_operator enum&lt;string&gt; Available options : `and`, `or` [​ ](#body-previous-start-date) previous_start_date string&lt;date&gt; Start of an explicit comparison window for deltas. Provide together with previous_end_date, or omit both to auto-derive an equal-length window immediately before [start_date, end_date]. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-previous-end-date) previous_end_date string&lt;date&gt; End of the explicit comparison window. Provide together with previous_start_date, or omit both to auto-derive. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-merchant-ids) merchant_ids string&lt;uuid&gt;[] Filter to products sold through these merchants. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-brand-ids) brand_ids string&lt;uuid&gt;[] Keep only products whose own brand is one of these. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-product-ids) product_ids string&lt;uuid&gt;[] Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-chat-scope) chat_scope enum&lt;string&gt; Which chats the visibility denominator counts: every in-scope chat (&#x27;all&#x27;) or only product-gallery (&#x27;shopping&#x27;) chats. Defaults to &#x27;shopping&#x27;. Available options : `all`, `shopping` 

## Response

 200 - application/json Success Success [​ ](#response-avg-visibility) avg_visibility number required [​ ](#response-avg-visibility-delta-one-of-0) avg_visibility_delta number | null required [​ ](#response-avg-win-rate) avg_win_rate number required [​ ](#response-avg-win-rate-delta-one-of-0) avg_win_rate_delta number | null required [​ ](#response-avg-position-one-of-0) avg_position number | null required [​ ](#response-avg-position-delta-one-of-0) avg_position_delta number | null required [ Get Shopping Attributes ](/api-reference/products/get-shopping-attributes)[ Get Shopping Trend ](/api-reference/products/get-shopping-trend) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/get-shopping-trend

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/get-shopping-trend#webpage","url":"https://docs.peec.ai/api-reference/products/get-shopping-trend","name":"Get Shopping Trend","description":"Return a product or brand shopping time series over a date range. Requires bucket and exactly one of product_ids or brand_ids.","dateModified":"2026-07-17T08:39:39.104Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/get-shopping-trend#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/get-shopping-trend#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Get Shopping Trend","item":"https://docs.peec.ai/api-reference/products/get-shopping-trend"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/get-shopping-trend#apireference","headline":"Get Shopping Trend","name":"Get Shopping Trend","description":"Return a product or brand shopping time series over a date range. Requires bucket and exactly one of product_ids or brand_ids.","url":"https://docs.peec.ai/api-reference/products/get-shopping-trend","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/get-shopping-trend#webpage"},"dateModified":"2026-07-17T08:39:39.104Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get Shopping Trend cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/trend \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "brand_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ] 
 } 
 ' 
```

```
 { 
 "series" : [ 
 { 
 "entity_id" : "&#x3C;string>" , 
 "points" : [ 
 { 
 "date" : "&#x3C;string>" , 
 "visibility" : 123 , 
 "win_rate" : 123 , 
 "avg_position" : 123 , 
 "sov" : 123 , 
 "has_data" : true 
 } 
 ] 
 } 
 ] 
 } 
```
 Products 

# Get Shopping Trend

 Return a product or brand shopping time series over a date range. Requires bucket and exactly one of product_ids or brand_ids. POST / products / trend Try it Get Shopping Trend cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/trend \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "brand_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ] 
 } 
 ' 
```

```
 { 
 "series" : [ 
 { 
 "entity_id" : "&#x3C;string>" , 
 "points" : [ 
 { 
 "date" : "&#x3C;string>" , 
 "visibility" : 123 , 
 "win_rate" : 123 , 
 "avg_position" : 123 , 
 "sov" : 123 , 
 "has_data" : true 
 } 
 ] 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-bucket) bucket enum&lt;string&gt; required Time-bucket granularity. Available options : `day`, `week`, `month` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-category-ids) category_ids string&lt;uuid&gt;[] Filter by shopping categories. Parent categories include descendants. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-country-codes) country_codes string[] [​ ](#body-model-channel-ids) model_channel_ids enum&lt;string&gt;[] Available options : `openai-0`, `openai-1`, `qwen-0`, `openai-2`, `perplexity-0`, `perplexity-1`, `google-0`, `google-1`, `google-2`, `google-3`, `google-4`, `anthropic-0`, `anthropic-1`, `deepseek-0`, `meta-0`, `xai-0`, `xai-1`, `microsoft-0`, `amazon-0`, `mistral-0`, `mistral-1` [​ ](#body-topic-ids) topic_ids string[] [​ ](#body-tag-ids) tag_ids string[] [​ ](#body-tag-operator) tag_operator enum&lt;string&gt; Available options : `and`, `or` [​ ](#body-merchant-ids) merchant_ids string&lt;uuid&gt;[] Filter to products sold through these merchants. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-brand-ids) brand_ids string&lt;uuid&gt;[] Global brands to chart. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-product-ids) product_ids string&lt;uuid&gt;[] Products to chart. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-chat-scope) chat_scope enum&lt;string&gt; Which chats the visibility denominator counts: every in-scope chat (&#x27;all&#x27;) or only product-gallery (&#x27;shopping&#x27;) chats. Defaults to &#x27;shopping&#x27;. Available options : `all`, `shopping` 

## Response

 200 - application/json Success Success [​ ](#response-entity-type) entity_type enum&lt;string&gt; required Available options : `product`, `brand` [​ ](#response-series) series object[] required Show child attributes [ Get Shopping Summary ](/api-reference/products/get-shopping-summary)[ List Shopping Performance ](/api-reference/products/list-shopping-performance) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/list-categories

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/list-categories#webpage","url":"https://docs.peec.ai/api-reference/products/list-categories","name":"List Categories","description":"List a project's product categories. Each row carries its full path and its parent_id, so the flat list reconstructs the category tree. Use the returned id as a category_id when creating, updating, or assigning products.","dateModified":"2026-07-17T08:39:39.174Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/list-categories#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/list-categories#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"List Categories","item":"https://docs.peec.ai/api-reference/products/list-categories"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/list-categories#apireference","headline":"List Categories","name":"List Categories","description":"List a project's product categories. Each row carries its full path and its parent_id, so the flat list reconstructs the category tree. Use the returned id as a category_id when creating, updating, or assigning products.","url":"https://docs.peec.ai/api-reference/products/list-categories","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/list-categories#webpage"},"dateModified":"2026-07-17T08:39:39.174Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Categories cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/categories \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "0190f9a1-1d8c-7e3a-9c2b-1f0a2b3c4d5e" , 
 "name" : "Running Shoes" , 
 "path" : "Footwear > Shoes > Running Shoes" , 
 "parent_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 } 
 ], 
 "total_count" : 123 
 } 
```
 Products 

# List Categories

 List a project’s product categories. Each row carries its full `path` and its `parent_id`, so the flat list reconstructs the category tree. Use the returned `id` as a `category_id` when creating, updating, or assigning products. GET / categories Try it List Categories cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/categories \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "0190f9a1-1d8c-7e3a-9c2b-1f0a2b3c4d5e" , 
 "name" : "Running Shoes" , 
 "path" : "Footwear > Shoes > Running Shoes" , 
 "parent_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 } 
 ], 
 "total_count" : 123 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 - application/json The project&#x27;s categories as a flat tree The project&#x27;s categories as a flat tree [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required [ Delete Products ](/api-reference/products/delete-products)[ Create Categories ](/api-reference/products/create-categories) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/list-global-brands

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/list-global-brands#webpage","url":"https://docs.peec.ai/api-reference/products/list-global-brands","name":"List Global Brands","description":"Search Peec's global brand catalog — the shared registry of real-world brands that products attach to via global_brand_id. Use it to find the global_brand_id for a brand when creating products. This is separate from GET /brands, which lists the brands a project tracks for AI-visibility reporting; the two use different ids. Primarily used with search. Pass ownership (own, competitor, or all) instead to list the project's shopping brands ranked by mentions, for use as shopping brand filters.","dateModified":"2026-07-17T08:39:39.215Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/list-global-brands#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/list-global-brands#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"List Global Brands","item":"https://docs.peec.ai/api-reference/products/list-global-brands"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/list-global-brands#apireference","headline":"List Global Brands","name":"List Global Brands","description":"Search Peec's global brand catalog — the shared registry of real-world brands that products attach to via global_brand_id. Use it to find the global_brand_id for a brand when creating products. This is separate from GET /brands, which lists the brands a project tracks for AI-visibility reporting; the two use different ids. Primarily used with search. Pass ownership (own, competitor, or all) instead to list the project's shopping brands ranked by mentions, for use as shopping brand filters.","url":"https://docs.peec.ai/api-reference/products/list-global-brands","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/list-global-brands#webpage"},"dateModified":"2026-07-17T08:39:39.215Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Global Brands cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/global-brands \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "019ecb6e-d030-7222-b531-b371fe9db583" , 
 "name" : "Nike" , 
 "domain" : "nike.com" , 
 "description" : "American athletic footwear and apparel company" , 
 "mention_count" : 123 , 
 "is_own" : true 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```
 Products 

# List Global Brands

 Search Peec’s global brand catalog — the shared registry of real-world brands that products attach to via `global_brand_id`. Use it to find the `global_brand_id` for a brand when creating products. This is separate from `GET /brands`, which lists the brands a project tracks for AI-visibility reporting; the two use different ids. Primarily used with `search`. Pass `ownership` (`own`, `competitor`, or `all`) instead to list the project’s shopping brands ranked by mentions, for use as shopping brand filters. GET / global-brands Try it List Global Brands cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/global-brands \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "019ecb6e-d030-7222-b531-b371fe9db583" , 
 "name" : "Nike" , 
 "domain" : "nike.com" , 
 "description" : "American athletic footwear and apparel company" , 
 "mention_count" : 123 , 
 "is_own" : true 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-search) search string Search the catalog by brand name (matches names and aliases). The primary way to use this endpoint. Example : ` "nike" ` [​ ](#parameter-ownership) ownership enum&lt;string&gt; List the project&#x27;s shopping brands instead of searching the catalog, ranked by all-time shopping mention count: ` own ` for the project&#x27;s own brands, ` competitor ` for competitors appearing in shopping data, ` all ` for both. Available options : `own`, `competitor`, `all` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of matching brands, ignoring pagination Example : ` 42 ` [​ ](#response-total-count) totalCount number required deprecated Total number of matching brands, ignoring pagination Example : ` 42 ` [ Delete Categories ](/api-reference/products/delete-categories)[ Create Global Brand ](/api-reference/products/create-global-brand) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/list-merchants

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/list-merchants#webpage","url":"https://docs.peec.ai/api-reference/products/list-merchants","name":"List Merchants","description":"List the merchants (sellers) whose product offers surfaced in AI answers, ranked over a date range: mentions, share of voice against the other merchants, buy-box win rate, average position, and average star rating, each with a delta against the previous window. Scope the population with category_ids or product_ids to get per-category or per-product seller breakdowns.","dateModified":"2026-07-17T08:39:39.133Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/list-merchants#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/list-merchants#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"List Merchants","item":"https://docs.peec.ai/api-reference/products/list-merchants"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/list-merchants#apireference","headline":"List Merchants","name":"List Merchants","description":"List the merchants (sellers) whose product offers surfaced in AI answers, ranked over a date range: mentions, share of voice against the other merchants, buy-box win rate, average position, and average star rating, each with a delta against the previous window. Scope the population with category_ids or product_ids to get per-category or per-product seller breakdowns.","url":"https://docs.peec.ai/api-reference/products/list-merchants","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/list-merchants#webpage"},"dateModified":"2026-07-17T08:39:39.133Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Merchants cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/merchants \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "previous_start_date": "2023-12-25", 
 "previous_end_date": "2023-12-25", 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "order_by": "mention_count", 
 "direction": "desc", 
 "limit": 50, 
 "offset": 0 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "merchant_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" , 
 "name" : "&#x3C;string>" , 
 "domain" : "&#x3C;string>" , 
 "mention_count" : 123 , 
 "mention_count_delta" : 123 , 
 "share_of_voice" : 123 , 
 "share_of_voice_delta" : 123 , 
 "win_rate" : 123 , 
 "win_rate_delta" : 123 , 
 "avg_position" : 123 , 
 "avg_position_delta" : 123 , 
 "avg_rating" : 123 , 
 "avg_rating_delta" : 123 
 } 
 ], 
 "total_count" : 123 
 } 
```
 Products 

# List Merchants

 List the merchants (sellers) whose product offers surfaced in AI answers, ranked over a date range: mentions, share of voice against the other merchants, buy-box win rate, average position, and average star rating, each with a delta against the previous window. Scope the population with category_ids or product_ids to get per-category or per-product seller breakdowns. POST / products / merchants Try it List Merchants cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/merchants \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "previous_start_date": "2023-12-25", 
 "previous_end_date": "2023-12-25", 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "order_by": "mention_count", 
 "direction": "desc", 
 "limit": 50, 
 "offset": 0 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "merchant_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" , 
 "name" : "&#x3C;string>" , 
 "domain" : "&#x3C;string>" , 
 "mention_count" : 123 , 
 "mention_count_delta" : 123 , 
 "share_of_voice" : 123 , 
 "share_of_voice_delta" : 123 , 
 "win_rate" : 123 , 
 "win_rate_delta" : 123 , 
 "avg_position" : 123 , 
 "avg_position_delta" : 123 , 
 "avg_rating" : 123 , 
 "avg_rating_delta" : 123 
 } 
 ], 
 "total_count" : 123 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-category-ids) category_ids string&lt;uuid&gt;[] Filter by shopping categories. Parent categories include descendants. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-country-codes) country_codes string[] [​ ](#body-model-channel-ids) model_channel_ids enum&lt;string&gt;[] Available options : `openai-0`, `openai-1`, `qwen-0`, `openai-2`, `perplexity-0`, `perplexity-1`, `google-0`, `google-1`, `google-2`, `google-3`, `google-4`, `anthropic-0`, `anthropic-1`, `deepseek-0`, `meta-0`, `xai-0`, `xai-1`, `microsoft-0`, `amazon-0`, `mistral-0`, `mistral-1` [​ ](#body-topic-ids) topic_ids string[] [​ ](#body-tag-ids) tag_ids string[] [​ ](#body-tag-operator) tag_operator enum&lt;string&gt; Available options : `and`, `or` [​ ](#body-previous-start-date) previous_start_date string&lt;date&gt; Start of an explicit comparison window for deltas. Provide together with previous_end_date, or omit both to auto-derive an equal-length window immediately before [start_date, end_date]. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-previous-end-date) previous_end_date string&lt;date&gt; End of the explicit comparison window. Provide together with previous_start_date, or omit both to auto-derive. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-merchant-ids) merchant_ids string&lt;uuid&gt;[] Return only these merchants. Unlike category_ids/product_ids, this does not shrink the share_of_voice denominator. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-product-ids) product_ids string&lt;uuid&gt;[] Narrow the population to these products — per-product seller breakdowns. share_of_voice is then the share among that product&#x27;s sellers. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-order-by) order_by enum&lt;string&gt; default: mention_count Available options : `mention_count`, `win_rate`, `avg_rating`, `avg_position` [​ ](#body-direction) direction enum&lt;string&gt; default: desc Available options : `asc`, `desc` [​ ](#body-limit) limit integer default: 50 Required range : `1 &lt;= x &lt;= 200` [​ ](#body-offset) offset integer default: 0 Required range : `0 &lt;= x &lt;= 9007199254740991` 

## Response

 200 - application/json Merchants (sellers) ranked by their metrics over the date range, with deltas against the previous window. share_of_voice divides a merchant&#x27;s mentions by all merchants&#x27; mentions in the filtered population, so category_ids/product_ids give per-category or per-product seller shares. win_rate is the buy-box rate (position-1 mentions over all mentions). Only merchants with current-window mentions are returned. Merchants (sellers) ranked by their metrics over the date range, with deltas against the previous window. share_of_voice divides a merchant&#x27;s mentions by all merchants&#x27; mentions in the filtered population, so category_ids/product_ids give per-category or per-product seller shares. win_rate is the buy-box rate (position-1 mentions over all mentions). Only merchants with current-window mentions are returned. [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required [ List Shopping Demand ](/api-reference/products/list-shopping-demand)[ Create Products ](/api-reference/products/create-products) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/list-products

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/list-products#webpage","url":"https://docs.peec.ai/api-reference/products/list-products","name":"List Products","description":"List a project's products with headline metrics (mention_count, win_count, avg_position, avg_rating, visibility, share_of_voice) over the date range, filterable by category, merchant, brand, country, model channel, topic, and tag. Paginated.","dateModified":"2026-07-17T08:39:39.063Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/list-products#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/list-products#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"List Products","item":"https://docs.peec.ai/api-reference/products/list-products"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/list-products#apireference","headline":"List Products","name":"List Products","description":"List a project's products with headline metrics (mention_count, win_count, avg_position, avg_rating, visibility, share_of_voice) over the date range, filterable by category, merchant, brand, country, model channel, topic, and tag. Paginated.","url":"https://docs.peec.ai/api-reference/products/list-products","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/list-products#webpage"},"dateModified":"2026-07-17T08:39:39.063Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Products cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/list \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "brand_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "search": "&#x3C;string>", 
 "order_by": "visibility", 
 "direction": "desc", 
 "limit": 1000, 
 "offset": 0 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "&#x3C;string>" , 
 "name" : "&#x3C;string>" , 
 "brand" : "&#x3C;string>" , 
 "image_url" : "&#x3C;string>" , 
 "price_range" : {}, 
 "categories" : [ 
 "&#x3C;string>" 
 ], 
 "mention_count" : 123 , 
 "win_count" : 123 , 
 "avg_position" : 123 , 
 "avg_rating" : 123 , 
 "visibility" : 123 , 
 "share_of_voice" : 123 
 } 
 ], 
 "total_count" : 123 
 } 
```
 Products 

# List Products

 List a project’s products with headline metrics (mention_count, win_count, avg_position, avg_rating, visibility, share_of_voice) over the date range, filterable by category, merchant, brand, country, model channel, topic, and tag. Paginated. POST / products / list Try it List Products cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/list \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "brand_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "search": "&#x3C;string>", 
 "order_by": "visibility", 
 "direction": "desc", 
 "limit": 1000, 
 "offset": 0 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "&#x3C;string>" , 
 "name" : "&#x3C;string>" , 
 "brand" : "&#x3C;string>" , 
 "image_url" : "&#x3C;string>" , 
 "price_range" : {}, 
 "categories" : [ 
 "&#x3C;string>" 
 ], 
 "mention_count" : 123 , 
 "win_count" : 123 , 
 "avg_position" : 123 , 
 "avg_rating" : 123 , 
 "visibility" : 123 , 
 "share_of_voice" : 123 
 } 
 ], 
 "total_count" : 123 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-product-ids) product_ids string&lt;uuid&gt;[] Filter to these product ids. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-brand-ids) brand_ids string&lt;uuid&gt;[] Filter to products of these brands (global_brand_id). Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-category-ids) category_ids string&lt;uuid&gt;[] Filter to products in any of these categories (OR — a product matches if it falls under at least one). Category ids roll up: selecting a parent also matches products in its descendant categories. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-merchant-ids) merchant_ids string&lt;uuid&gt;[] Filter to products sold through these merchants. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-country-codes) country_codes string[] [​ ](#body-model-channel-ids) model_channel_ids enum&lt;string&gt;[] Available options : `openai-0`, `openai-1`, `qwen-0`, `openai-2`, `perplexity-0`, `perplexity-1`, `google-0`, `google-1`, `google-2`, `google-3`, `google-4`, `anthropic-0`, `anthropic-1`, `deepseek-0`, `meta-0`, `xai-0`, `xai-1`, `microsoft-0`, `amazon-0`, `mistral-0`, `mistral-1` [​ ](#body-topic-ids) topic_ids string[] [​ ](#body-tag-ids) tag_ids string[] [​ ](#body-tag-operator) tag_operator enum&lt;string&gt; Available options : `and`, `or` [​ ](#body-chat-scope) chat_scope enum&lt;string&gt; Which chats the visibility denominator counts: every in-scope chat (&#x27;all&#x27;) or only product-gallery (&#x27;shopping&#x27;) chats. Defaults to &#x27;shopping&#x27;. Available options : `all`, `shopping` [​ ](#body-source) source enum&lt;string&gt; Available options : `CATALOG`, `LLM` [​ ](#body-search) search string [​ ](#body-order-by) order_by enum&lt;string&gt; default: visibility Available options : `visibility`, `win_rate`, `avg_position`, `avg_rating`, `mention_count`, `name` [​ ](#body-direction) direction enum&lt;string&gt; default: desc Available options : `asc`, `desc` [​ ](#body-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#body-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Products with headline metrics over the date range Products with headline metrics over the date range [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required [ Set URL Classification ](/api-reference/project/set-url-classification)[ Get Product ](/api-reference/products/get-product) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/list-shopping-demand

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/list-shopping-demand#webpage","url":"https://docs.peec.ai/api-reference/products/list-shopping-demand","name":"List Shopping Demand","description":"List top shopping queries, web-search fan-out queries, or query terms over a date range.","dateModified":"2026-07-17T08:39:39.123Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/list-shopping-demand#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/list-shopping-demand#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"List Shopping Demand","item":"https://docs.peec.ai/api-reference/products/list-shopping-demand"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/list-shopping-demand#apireference","headline":"List Shopping Demand","name":"List Shopping Demand","description":"List top shopping queries, web-search fan-out queries, or query terms over a date range.","url":"https://docs.peec.ai/api-reference/products/list-shopping-demand","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/list-shopping-demand#webpage"},"dateModified":"2026-07-17T08:39:39.123Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Shopping Demand cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/demand \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "previous_start_date": "2023-12-25", 
 "previous_end_date": "2023-12-25", 
 "mode": "top", 
 "limit": 50, 
 "n": 2 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "text" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "total_count" : 123 
 } 
```
 Products 

# List Shopping Demand

 List top shopping queries, web-search fan-out queries, or query terms over a date range. POST / products / demand Try it List Shopping Demand cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/demand \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "previous_start_date": "2023-12-25", 
 "previous_end_date": "2023-12-25", 
 "mode": "top", 
 "limit": 50, 
 "n": 2 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "text" : "&#x3C;string>" , 
 "distinct_chat_count" : 123 , 
 "distinct_chat_count_previous" : 123 , 
 "delta" : 123 
 } 
 ], 
 "total_count" : 123 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-kind) kind enum&lt;string&gt; required shopping_query = product fan-out queries; fanout_query = web-search fan-out queries; query_term = n-grams across shopping queries. Available options : `shopping_query`, `fanout_query`, `query_term` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-category-ids) category_ids string&lt;uuid&gt;[] Filter by shopping categories. Parent categories include descendants. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-country-codes) country_codes string[] [​ ](#body-model-channel-ids) model_channel_ids enum&lt;string&gt;[] Available options : `openai-0`, `openai-1`, `qwen-0`, `openai-2`, `perplexity-0`, `perplexity-1`, `google-0`, `google-1`, `google-2`, `google-3`, `google-4`, `anthropic-0`, `anthropic-1`, `deepseek-0`, `meta-0`, `xai-0`, `xai-1`, `microsoft-0`, `amazon-0`, `mistral-0`, `mistral-1` [​ ](#body-topic-ids) topic_ids string[] [​ ](#body-tag-ids) tag_ids string[] [​ ](#body-tag-operator) tag_operator enum&lt;string&gt; Available options : `and`, `or` [​ ](#body-previous-start-date) previous_start_date string&lt;date&gt; Start of an explicit comparison window for deltas. Provide together with previous_end_date, or omit both to auto-derive an equal-length window immediately before [start_date, end_date]. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-previous-end-date) previous_end_date string&lt;date&gt; End of the explicit comparison window. Provide together with previous_start_date, or omit both to auto-derive. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-mode) mode enum&lt;string&gt; default: top top = highest now; trending = gainers; losing = losers; new = appeared this window only. Available options : `top`, `trending`, `losing`, `new` [​ ](#body-limit) limit integer default: 50 Required range : `1 &lt;= x &lt;= 1000` [​ ](#body-n) n integer default: 2 n-gram width for kind=query_term (default 2 = bigrams). Required range : `1 &lt;= x &lt;= 3` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required [ List Shopping Performance ](/api-reference/products/list-shopping-performance)[ List Merchants ](/api-reference/products/list-merchants) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/list-shopping-performance

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/list-shopping-performance#webpage","url":"https://docs.peec.ai/api-reference/products/list-shopping-performance","name":"List Shopping Performance","description":"List ranked product or category shopping performance over a date range.","dateModified":"2026-07-17T08:39:39.114Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/list-shopping-performance#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/list-shopping-performance#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"List Shopping Performance","item":"https://docs.peec.ai/api-reference/products/list-shopping-performance"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/list-shopping-performance#apireference","headline":"List Shopping Performance","name":"List Shopping Performance","description":"List ranked product or category shopping performance over a date range.","url":"https://docs.peec.ai/api-reference/products/list-shopping-performance","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/list-shopping-performance#webpage"},"dateModified":"2026-07-17T08:39:39.114Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Shopping Performance cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/performance \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "previous_start_date": "2023-12-25", 
 "previous_end_date": "2023-12-25", 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "brand_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "category_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "mode": "top", 
 "order_by": "visibility", 
 "direction": "desc", 
 "limit": 50, 
 "offset": 0 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "entity_id" : "&#x3C;string>" , 
 "name" : "&#x3C;string>" , 
 "visibility" : 123 , 
 "visibility_delta" : 123 , 
 "win_rate" : 123 , 
 "win_rate_delta" : 123 , 
 "avg_position" : 123 , 
 "avg_position_delta" : 123 , 
 "appearances" : 123 , 
 "appearances_delta" : 123 
 } 
 ], 
 "total_count" : 123 
 } 
```
 Products 

# List Shopping Performance

 List ranked product or category shopping performance over a date range. POST / products / performance Try it List Shopping Performance cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/performance \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "country_codes": [ 
 "&#x3C;string>" 
 ], 
 "model_channel_ids": [], 
 "topic_ids": [ 
 "&#x3C;string>" 
 ], 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "previous_start_date": "2023-12-25", 
 "previous_end_date": "2023-12-25", 
 "merchant_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "brand_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "product_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ], 
 "category_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "mode": "top", 
 "order_by": "visibility", 
 "direction": "desc", 
 "limit": 50, 
 "offset": 0 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "entity_id" : "&#x3C;string>" , 
 "name" : "&#x3C;string>" , 
 "visibility" : 123 , 
 "visibility_delta" : 123 , 
 "win_rate" : 123 , 
 "win_rate_delta" : 123 , 
 "avg_position" : 123 , 
 "avg_position_delta" : 123 , 
 "appearances" : 123 , 
 "appearances_delta" : 123 
 } 
 ], 
 "total_count" : 123 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-entity-type) entity_type enum&lt;string&gt; required Rank products (leaderboard) or categories. Available options : `product`, `category` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-category-ids) category_ids string&lt;uuid&gt;[] Filter by shopping categories. Parent categories include descendants. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-country-codes) country_codes string[] [​ ](#body-model-channel-ids) model_channel_ids enum&lt;string&gt;[] Available options : `openai-0`, `openai-1`, `qwen-0`, `openai-2`, `perplexity-0`, `perplexity-1`, `google-0`, `google-1`, `google-2`, `google-3`, `google-4`, `anthropic-0`, `anthropic-1`, `deepseek-0`, `meta-0`, `xai-0`, `xai-1`, `microsoft-0`, `amazon-0`, `mistral-0`, `mistral-1` [​ ](#body-topic-ids) topic_ids string[] [​ ](#body-tag-ids) tag_ids string[] [​ ](#body-tag-operator) tag_operator enum&lt;string&gt; Available options : `and`, `or` [​ ](#body-previous-start-date) previous_start_date string&lt;date&gt; Start of an explicit comparison window for deltas. Provide together with previous_end_date, or omit both to auto-derive an equal-length window immediately before [start_date, end_date]. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-previous-end-date) previous_end_date string&lt;date&gt; End of the explicit comparison window. Provide together with previous_start_date, or omit both to auto-derive. Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#body-merchant-ids) merchant_ids string&lt;uuid&gt;[] Filter to products sold through these merchants. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-brand-ids) brand_ids string&lt;uuid&gt;[] For products, keep only products of these global brands. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-product-ids) product_ids string&lt;uuid&gt;[] Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-category-id) category_id string&lt;uuid&gt; For categories, return only this category. Pattern: `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$` [​ ](#body-chat-scope) chat_scope enum&lt;string&gt; Which chats the visibility denominator counts: every in-scope chat (&#x27;all&#x27;) or only product-gallery (&#x27;shopping&#x27;) chats. Defaults to &#x27;shopping&#x27;. Available options : `all`, `shopping` [​ ](#body-mode) mode enum&lt;string&gt; default: top top = highest now; trending = biggest gainers; losing = biggest losers. Available options : `top`, `trending`, `losing` [​ ](#body-order-by) order_by enum&lt;string&gt; default: visibility Available options : `visibility`, `win_rate`, `appearances` [​ ](#body-direction) direction enum&lt;string&gt; default: desc Available options : `asc`, `desc` [​ ](#body-limit) limit integer default: 50 Required range : `1 &lt;= x &lt;= 1000` [​ ](#body-offset) offset integer default: 0 Required range : `0 &lt;= x &lt;= 9007199254740991` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required [ Get Shopping Trend ](/api-reference/products/get-shopping-trend)[ List Shopping Demand ](/api-reference/products/list-shopping-demand) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/update-categories

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/update-categories#webpage","url":"https://docs.peec.ai/api-reference/products/update-categories","name":"Update Categories","description":"Rename and/or reparent categories by id. Each item sets name (rename), parent_id (move; null = promote to top level), or both — at least one is required. A combined edit is applied move-then-rename. Returns per-item results { updated, rejected } — the batch never fails as a whole. Rejection reasons: not_found, name_conflict, invalid_move (would nest a category inside itself).","dateModified":"2026-07-17T08:39:39.193Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/update-categories#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/update-categories#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Update Categories","item":"https://docs.peec.ai/api-reference/products/update-categories"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/update-categories#apireference","headline":"Update Categories","name":"Update Categories","description":"Rename and/or reparent categories by id. Each item sets name (rename), parent_id (move; null = promote to top level), or both — at least one is required. A combined edit is applied move-then-rename. Returns per-item results { updated, rejected } — the batch never fails as a whole. Rejection reasons: not_found, name_conflict, invalid_move (would nest a category inside itself).","url":"https://docs.peec.ai/api-reference/products/update-categories","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/update-categories#webpage"},"dateModified":"2026-07-17T08:39:39.193Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Update Categories cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/categories/update \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "categories": [ 
 { 
 "category_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "name": "&#x3C;string>", 
 "parent_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 } 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "updated" : [ 
 { 
 "category_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 } 
 ], 
 "rejected" : [ 
 { 
 "category_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" , 
 "message" : "&#x3C;string>" 
 } 
 ] 
 } 
```
 Products 

# Update Categories

 Rename and/or reparent categories by id. Each item sets `name` (rename), `parent_id` (move; null = promote to top level), or both — at least one is required. A combined edit is applied move-then-rename. Returns per-item results — the batch never fails as a whole. Rejection reasons: not_found, name_conflict, invalid_move (would nest a category inside itself). POST / categories / update Try it Update Categories cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/categories/update \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "categories": [ 
 { 
 "category_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "name": "&#x3C;string>", 
 "parent_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 } 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "updated" : [ 
 { 
 "category_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 } 
 ], 
 "rejected" : [ 
 { 
 "category_id" : "3c90c3cc-0d44-4b50-8888-8dd25736052a" , 
 "message" : "&#x3C;string>" 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-categories) categories object[] required Required array length: `1 - 1000` element s Show child attributes [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 - application/json Per-item update results Per-item update results [​ ](#response-updated) updated object[] required Show child attributes [​ ](#response-rejected) rejected object[] required Show child attributes [ Create Categories ](/api-reference/products/create-categories)[ Delete Categories ](/api-reference/products/delete-categories) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/products/update-products

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/products/update-products#webpage","url":"https://docs.peec.ai/api-reference/products/update-products","name":"Update Products","description":"Update products (name, description, image, price overrides, categories). Each item is independent: items with nothing to apply (not found, no changes, duplicate id) are reported in skipped, and unsatisfiable changes (name conflict, unknown category) in rejected, so the batch never fails as a whole.","dateModified":"2026-07-17T08:39:39.154Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/products/update-products#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/products/update-products#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Products","item":"https://docs.peec.ai/api-reference/products/list-products"},{"@type":"ListItem","position":3,"name":"Update Products","item":"https://docs.peec.ai/api-reference/products/update-products"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/products/update-products#apireference","headline":"Update Products","name":"Update Products","description":"Update products (name, description, image, price overrides, categories). Each item is independent: items with nothing to apply (not found, no changes, duplicate id) are reported in skipped, and unsatisfiable changes (name conflict, unknown category) in rejected, so the batch never fails as a whole.","url":"https://docs.peec.ai/api-reference/products/update-products","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/products/update-products#webpage"},"dateModified":"2026-07-17T08:39:39.154Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Update Products cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/update \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "products": [ 
 { 
 "product_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "name": "&#x3C;string>", 
 "description": "&#x3C;string>", 
 "image_url": "&#x3C;string>", 
 "price_override": {}, 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ] 
 } 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "updated" : [ 
 { 
 "product_id" : "&#x3C;string>" 
 } 
 ], 
 "skipped" : [ 
 { 
 "product_id" : "&#x3C;string>" 
 } 
 ], 
 "rejected" : [ 
 { 
 "product_id" : "&#x3C;string>" , 
 "message" : "&#x3C;string>" 
 } 
 ] 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/products/update \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "products": [ 
 { 
 "product_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a", 
 "name": "&#x3C;string>", 
 "description": "&#x3C;string>", 
 "image_url": "&#x3C;string>", 
 "price_override": {}, 
 "category_ids": [ 
 "3c90c3cc-0d44-4b50-8888-8dd25736052a" 
 ] 
 } 
 ], 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 { 
 "updated" : [ 
 { 
 "product_id" : "&#x3C;string>" 
 } 
 ], 
 "skipped" : [ 
 { 
 "product_id" : "&#x3C;string>" 
 } 
 ], 
 "rejected" : [ 
 { 
 "product_id" : "&#x3C;string>" , 
 "message" : "&#x3C;string>" 
 } 
 ] 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-products) products object[] required Required array length: `1 - 1000` element s Show child attributes [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 application/json Per-item update results Per-item update results [​ ](#response-updated) updated object[] required Show child attributes [​ ](#response-skipped) skipped object[] required Show child attributes [​ ](#response-rejected) rejected object[] required Show child attributes [ Create Products ](/api-reference/products/create-products)[ Delete Products ](/api-reference/products/delete-products) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/accept-brand-suggestion

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/accept-brand-suggestion#webpage","url":"https://docs.peec.ai/api-reference/project/accept-brand-suggestion","name":"Accept Brand Suggestion","description":"Accept a brand suggestion by ID, converting it into a brand within the project","dateModified":"2026-07-17T08:39:39.267Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/accept-brand-suggestion#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/accept-brand-suggestion#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Accept Brand Suggestion","item":"https://docs.peec.ai/api-reference/project/accept-brand-suggestion"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/accept-brand-suggestion#apireference","headline":"Accept Brand Suggestion","name":"Accept Brand Suggestion","description":"Accept a brand suggestion by ID, converting it into a brand within the project","url":"https://docs.peec.ai/api-reference/project/accept-brand-suggestion","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/accept-brand-suggestion#webpage"},"dateModified":"2026-07-17T08:39:39.267Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Accept Brand Suggestion cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/brands/suggestions/{brand_suggestion_id}/accept \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/brands/suggestions/{brand_suggestion_id}/accept \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" 
 } 
```
 ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-brand-suggestion-id) brand_suggestion_id string required 

## Response

 200 application/json Brand suggestion accepted successfully Brand suggestion accepted successfully [​ ](#response-id) id string required Example : ` "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" ` [ List Brand Suggestions ](/api-reference/project/list-brand-suggestions)[ Reject Brand Suggestion ](/api-reference/project/reject-brand-suggestion) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/accept-prompt-suggestion

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/accept-prompt-suggestion#webpage","url":"https://docs.peec.ai/api-reference/project/accept-prompt-suggestion","name":"Accept Prompt Suggestion","description":"Accept a prompt suggestion by ID, creating a new prompt from it. Optionally pass a country_code to override the suggestion's country for the created prompt.","dateModified":"2026-07-17T08:39:39.341Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/accept-prompt-suggestion#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/accept-prompt-suggestion#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Accept Prompt Suggestion","item":"https://docs.peec.ai/api-reference/project/accept-prompt-suggestion"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/accept-prompt-suggestion#apireference","headline":"Accept Prompt Suggestion","name":"Accept Prompt Suggestion","description":"Accept a prompt suggestion by ID, creating a new prompt from it. Optionally pass a country_code to override the suggestion's country for the created prompt.","url":"https://docs.peec.ai/api-reference/project/accept-prompt-suggestion","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/accept-prompt-suggestion#webpage"},"dateModified":"2026-07-17T08:39:39.341Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Accept Prompt Suggestion cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts/suggestions/{prompt_suggestion_id}/accept \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data '{}' 
```

```
 { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts/suggestions/{prompt_suggestion_id}/accept \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data '{}' 
```

```
 { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 } 
```
 ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-prompt-suggestion-id) prompt_suggestion_id string required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-country-code) country_code enum&lt;string&gt; Available options : `AE`, `AL`, `AM`, `AR`, `AT`, `AU`, `BA`, `BE`, `BG`, `BH`, `BO`, `BR`, `BS`, `BY`, `CA`, `CH`, `CL`, `CN`, `CO`, `CR`, `CY`, `CZ`, `DE`, `DK`, `DO`, `EC`, `EE`, `EG`, `ES`, `FI`, `FR`, `GB`, `GE`, `GH`, `GR`, `GT`, `HK`, `HN`, `HR`, `HU`, `ID`, `IE`, `IL`, `IN`, `IQ`, `IS`, `IT`, `JO`, `JP`, `KR`, `KW`, `LB`, `LI`, `LT`, `LU`, `LV`, `MA`, `MD`, `ME`, `MK`, `MT`, `MX`, `MY`, `NG`, `NI`, `NL`, `NO`, `NZ`, `OM`, `PK`, `PA`, `PE`, `PH`, `PL`, `PT`, `PY`, `PS`, `QA`, `RO`, `RS`, `SA`, `SE`, `SG`, `SI`, `SK`, `SV`, `TH`, `TN`, `TR`, `TW`, `UA`, `US`, `UY`, `VE`, `VN`, `ZA`, `AD`, `AF`, `AS`, `AZ`, `BB`, `BQ`, `CG`, `CI`, `CM`, `CW`, `DM`, `DZ`, `FO`, `GF`, `GP`, `JM`, `KG`, `KH`, `KI`, `KZ`, `LK`, `LR`, `LS`, `MW`, `NC`, `PG`, `TD`, `TF`, `UG`, `VU`, `ZW` 

## Response

 200 application/json Prompt suggestion accepted and prompt created Prompt suggestion accepted and prompt created [​ ](#response-id) id string required Example : ` "pr_93f790de-5b7a-45ee-b782-61103c81f20d" ` [ List Prompt Suggestions ](/api-reference/project/list-prompt-suggestions)[ Reject Prompt Suggestion ](/api-reference/project/reject-prompt-suggestion) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/accept-topic-suggestion

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/accept-topic-suggestion#webpage","url":"https://docs.peec.ai/api-reference/project/accept-topic-suggestion","name":"Accept Topic Suggestion","description":"Accept a topic suggestion by ID, converting it into a regular topic","dateModified":"2026-07-17T08:39:39.501Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/accept-topic-suggestion#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/accept-topic-suggestion#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Accept Topic Suggestion","item":"https://docs.peec.ai/api-reference/project/accept-topic-suggestion"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/accept-topic-suggestion#apireference","headline":"Accept Topic Suggestion","name":"Accept Topic Suggestion","description":"Accept a topic suggestion by ID, converting it into a regular topic","url":"https://docs.peec.ai/api-reference/project/accept-topic-suggestion","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/accept-topic-suggestion#webpage"},"dateModified":"2026-07-17T08:39:39.501Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Accept Topic Suggestion cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/topics/suggestions/{topic_suggestion_id}/accept \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "id" : "to_93f790de-5b7a-45ee-b782-61103c81f20d" 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/topics/suggestions/{topic_suggestion_id}/accept \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "id" : "to_93f790de-5b7a-45ee-b782-61103c81f20d" 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-topic-suggestion-id) topic_suggestion_id string required 

## Response

 200 application/json Topic suggestion accepted successfully Topic suggestion accepted successfully [​ ](#response-id) id string required Example : ` "to_93f790de-5b7a-45ee-b782-61103c81f20d" ` [ List Topic Suggestions ](/api-reference/project/list-topic-suggestions)[ Reject Topic Suggestion ](/api-reference/project/reject-topic-suggestion) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/archive-prompt

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/archive-prompt#webpage","url":"https://docs.peec.ai/api-reference/project/archive-prompt","name":"Archive Prompt","description":"Archive a prompt (is_archived = true) so it stops running while keeping its chats and history","dateModified":"2026-07-17T08:39:39.380Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/archive-prompt#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/archive-prompt#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Archive Prompt","item":"https://docs.peec.ai/api-reference/project/archive-prompt"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/archive-prompt#apireference","headline":"Archive Prompt","name":"Archive Prompt","description":"Archive a prompt (is_archived = true) so it stops running while keeping its chats and history","url":"https://docs.peec.ai/api-reference/project/archive-prompt","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/archive-prompt#webpage"},"dateModified":"2026-07-17T08:39:39.380Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Archive Prompt cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts/{prompt_id}/archive \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts/{prompt_id}/archive \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/prompts/ {prompt_id} /archive" headers = { "X-API-Key" : "&#x3C;api-key>" } response = requests.post(url, headers = headers) print (response.text) ` ` const options = { method: 'POST' , headers: { 'X-API-Key' : '&#x3C;api-key>' }}; fetch ( 'https://api.peec.ai/customer/v1/prompts/{prompt_id}/archive' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/prompts/{prompt_id}/archive" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "POST" , CURLOPT_HTTPHEADER => [ "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/prompts/{prompt_id}/archive" 	req , _ := http . NewRequest ( "POST" , url , nil ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . post ( "https://api.peec.ai/customer/v1/prompts/{prompt_id}/archive" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/prompts/{prompt_id}/archive" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Post . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-prompt-id) prompt_id string required 

## Response

 200 application/json Prompt archived successfully Prompt archived successfully [ Update Prompt ](/api-reference/project/update-prompt)[ Unarchive Prompt ](/api-reference/project/unarchive-prompt) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/create-brand

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/create-brand#webpage","url":"https://docs.peec.ai/api-reference/project/create-brand","name":"Create Brand","description":"Create a new brand within a project","dateModified":"2026-07-17T08:39:39.246Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/create-brand#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/create-brand#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Create Brand","item":"https://docs.peec.ai/api-reference/project/create-brand"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/create-brand#apireference","headline":"Create Brand","name":"Create Brand","description":"Create a new brand within a project","url":"https://docs.peec.ai/api-reference/project/create-brand","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/create-brand#webpage"},"dateModified":"2026-07-17T08:39:39.246Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Create Brand cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/brands \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "domains": [ 
 "&#x3C;string>" 
 ], 
 "regex": "&#x3C;string>", 
 "aliases": [ 
 "&#x3C;string>" 
 ], 
 "color": "&#x3C;string>" 
 } 
 ' 
```

```
 { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/brands \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "domains": [ 
 "&#x3C;string>" 
 ], 
 "regex": "&#x3C;string>", 
 "aliases": [ 
 "&#x3C;string>" 
 ], 
 "color": "&#x3C;string>" 
 } 
 ' 
```

```
 { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" 
 } 
```
 ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string required Minimum string length: `1` [​ ](#body-domains) domains string[] [​ ](#body-regex) regex string [​ ](#body-aliases) aliases string[] [​ ](#body-color) color string Hex color like #1A2B3C 

## Response

 201 application/json Brand created successfully Brand created successfully [​ ](#response-id) id string required Example : ` "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" ` [ List Brands ](/api-reference/project/list-brands)[ List Brand Suggestions ](/api-reference/project/list-brand-suggestions) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/create-custom-domain-classification

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/create-custom-domain-classification#webpage","url":"https://docs.peec.ai/api-reference/project/create-custom-domain-classification","name":"Create Custom Domain Classification","description":"Define a new custom domain classification for a project. Once created, it can be assigned to domains via the assignment endpoint.","dateModified":"2026-07-17T08:39:39.641Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/create-custom-domain-classification#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/create-custom-domain-classification#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Create Custom Domain Classification","item":"https://docs.peec.ai/api-reference/project/create-custom-domain-classification"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/create-custom-domain-classification#apireference","headline":"Create Custom Domain Classification","name":"Create Custom Domain Classification","description":"Define a new custom domain classification for a project. Once created, it can be assigned to domains via the assignment endpoint.","url":"https://docs.peec.ai/api-reference/project/create-custom-domain-classification","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/create-custom-domain-classification#webpage"},"dateModified":"2026-07-17T08:39:39.641Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Create Custom Domain Classification cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/classifications/domains \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;color&quot;: &quot;orange&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/classifications/domains&quot;

payload = {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;color&quot;: &quot;orange&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 name: &#x27;&lt;string&gt;&#x27;,
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 color: &#x27;orange&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/classifications/domains&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/classifications/domains&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;name&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 &#x27;color&#x27; =&gt; &#x27;orange&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/classifications/domains&quot;

	payload := strings.NewReader(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/classifications/domains&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/classifications/domains&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 201 409 
```
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;color&quot;: &quot;&lt;string&gt;&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```
 Project 

# Create Custom Domain Classification

 Define a new custom domain classification for a project. Once created, it can be assigned to domains via the assignment endpoint. POST / classifications / domains Try it Create Custom Domain Classification cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/classifications/domains \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;color&quot;: &quot;orange&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/classifications/domains&quot;

payload = {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;color&quot;: &quot;orange&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 name: &#x27;&lt;string&gt;&#x27;,
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 color: &#x27;orange&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/classifications/domains&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/classifications/domains&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;name&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 &#x27;color&#x27; =&gt; &#x27;orange&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/classifications/domains&quot;

	payload := strings.NewReader(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/classifications/domains&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/classifications/domains&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 201 409 
```
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;color&quot;: &quot;&lt;string&gt;&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string required Required string length: `1 - 60` [​ ](#body-project-id) project_id string Required if using a company api key Example : `&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;` [​ ](#body-color) color enum&lt;string&gt; default: orange Available options : `orange`, `red`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `gray` Example : `&quot;orange&quot;` 

## Response

 201 application/json Custom domain classification created Custom domain classification created [​ ](#response-name) name string required [​ ](#response-color) color string required [ List Custom Domain Classifications ](/api-reference/project/list-custom-domain-classifications)[ Delete Custom Domain Classification ](/api-reference/project/delete-custom-domain-classification) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/create-custom-url-classification

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/create-custom-url-classification#webpage","url":"https://docs.peec.ai/api-reference/project/create-custom-url-classification","name":"Create Custom URL Classification","description":"Define a new custom URL classification for a project. Once created, it can be assigned to URLs via the assignment endpoint.","dateModified":"2026-07-17T08:39:39.681Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/create-custom-url-classification#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/create-custom-url-classification#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Create Custom URL Classification","item":"https://docs.peec.ai/api-reference/project/create-custom-url-classification"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/create-custom-url-classification#apireference","headline":"Create Custom URL Classification","name":"Create Custom URL Classification","description":"Define a new custom URL classification for a project. Once created, it can be assigned to URLs via the assignment endpoint.","url":"https://docs.peec.ai/api-reference/project/create-custom-url-classification","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/create-custom-url-classification#webpage"},"dateModified":"2026-07-17T08:39:39.681Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Create Custom URL Classification cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/classifications/urls \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;color&quot;: &quot;orange&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/classifications/urls&quot;

payload = {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;color&quot;: &quot;orange&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 name: &#x27;&lt;string&gt;&#x27;,
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 color: &#x27;orange&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/classifications/urls&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/classifications/urls&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;name&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 &#x27;color&#x27; =&gt; &#x27;orange&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/classifications/urls&quot;

	payload := strings.NewReader(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/classifications/urls&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/classifications/urls&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 201 409 
```
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;color&quot;: &quot;&lt;string&gt;&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```
 Project 

# Create Custom URL Classification

 Define a new custom URL classification for a project. Once created, it can be assigned to URLs via the assignment endpoint. POST / classifications / urls Try it Create Custom URL Classification cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/classifications/urls \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;color&quot;: &quot;orange&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/classifications/urls&quot;

payload = {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;,
 &quot;color&quot;: &quot;orange&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 name: &#x27;&lt;string&gt;&#x27;,
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 color: &#x27;orange&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/classifications/urls&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/classifications/urls&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;name&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;,
 &#x27;color&#x27; =&gt; &#x27;orange&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/classifications/urls&quot;

	payload := strings.NewReader(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/classifications/urls&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/classifications/urls&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;,\n \&quot;color\&quot;: \&quot;orange\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 201 409 
```
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;color&quot;: &quot;&lt;string&gt;&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string required Required string length: `1 - 60` [​ ](#body-project-id) project_id string Required if using a company api key Example : `&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;` [​ ](#body-color) color enum&lt;string&gt; default: orange Available options : `orange`, `red`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `gray` Example : `&quot;orange&quot;` 

## Response

 201 application/json Custom URL classification created Custom URL classification created [​ ](#response-name) name string required [​ ](#response-color) color string required [ List Custom URL Classifications ](/api-reference/project/list-custom-url-classifications)[ Delete Custom URL Classification ](/api-reference/project/delete-custom-url-classification) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/create-prompt

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/create-prompt#webpage","url":"https://docs.peec.ai/api-reference/project/create-prompt","name":"Create Prompt","description":"Create a new prompt within a project","dateModified":"2026-07-17T08:39:39.320Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/create-prompt#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/create-prompt#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Create Prompt","item":"https://docs.peec.ai/api-reference/project/create-prompt"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/create-prompt#apireference","headline":"Create Prompt","name":"Create Prompt","description":"Create a new prompt within a project","url":"https://docs.peec.ai/api-reference/project/create-prompt","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/create-prompt#webpage"},"dateModified":"2026-07-17T08:39:39.320Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Create Prompt cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "text": "&#x3C;string>", 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "topic_id": "&#x3C;string>" 
 } 
 ' 
```

```
 { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" , 
 "warning" : "&#x3C;string>" 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "text": "&#x3C;string>", 
 "tag_ids": [ 
 "&#x3C;string>" 
 ], 
 "topic_id": "&#x3C;string>" 
 } 
 ' 
```

```
 { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" , 
 "warning" : "&#x3C;string>" 
 } 
```
 ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-text) text string required Required string length: `1 - 2000` [​ ](#body-country-code) country_code enum&lt;string&gt; required Available options : `AE`, `AL`, `AM`, `AR`, `AT`, `AU`, `BA`, `BE`, `BG`, `BH`, `BO`, `BR`, `BS`, `BY`, `CA`, `CH`, `CL`, `CN`, `CO`, `CR`, `CY`, `CZ`, `DE`, `DK`, `DO`, `EC`, `EE`, `EG`, `ES`, `FI`, `FR`, `GB`, `GE`, `GH`, `GR`, `GT`, `HK`, `HN`, `HR`, `HU`, `ID`, `IE`, `IL`, `IN`, `IQ`, `IS`, `IT`, `JO`, `JP`, `KR`, `KW`, `LB`, `LI`, `LT`, `LU`, `LV`, `MA`, `MD`, `ME`, `MK`, `MT`, `MX`, `MY`, `NG`, `NI`, `NL`, `NO`, `NZ`, `OM`, `PK`, `PA`, `PE`, `PH`, `PL`, `PT`, `PY`, `PS`, `QA`, `RO`, `RS`, `SA`, `SE`, `SG`, `SI`, `SK`, `SV`, `TH`, `TN`, `TR`, `TW`, `UA`, `US`, `UY`, `VE`, `VN`, `ZA`, `AD`, `AF`, `AS`, `AZ`, `BB`, `BQ`, `CG`, `CI`, `CM`, `CW`, `DM`, `DZ`, `FO`, `GF`, `GP`, `JM`, `KG`, `KH`, `KI`, `KZ`, `LK`, `LR`, `LS`, `MW`, `NC`, `PG`, `TD`, `TF`, `UG`, `VU`, `ZW` [​ ](#body-tag-ids) tag_ids string[] [​ ](#body-topic-id) topic_id string 

## Response

 201 application/json Prompt created successfully Prompt created successfully [​ ](#response-id) id string required Example : ` "pr_93f790de-5b7a-45ee-b782-61103c81f20d" ` [​ ](#response-warning) warning string Warning message regarding the created prompt [ List Prompts ](/api-reference/project/list-prompts)[ List Prompt Suggestions ](/api-reference/project/list-prompt-suggestions) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/create-tag

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/create-tag#webpage","url":"https://docs.peec.ai/api-reference/project/create-tag","name":"Create Tag","description":"Create a new tag within a project","dateModified":"2026-07-17T08:39:39.410Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/create-tag#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/create-tag#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Create Tag","item":"https://docs.peec.ai/api-reference/project/create-tag"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/create-tag#apireference","headline":"Create Tag","name":"Create Tag","description":"Create a new tag within a project","url":"https://docs.peec.ai/api-reference/project/create-tag","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/create-tag#webpage"},"dateModified":"2026-07-17T08:39:39.410Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Create Tag cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/tags \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;color&quot;: &quot;gray&quot;,
 &quot;group&quot;: &quot;persona&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/tags&quot;

payload = {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;color&quot;: &quot;gray&quot;,
 &quot;group&quot;: &quot;persona&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({name: &#x27;&lt;string&gt;&#x27;, color: &#x27;gray&#x27;, group: &#x27;persona&#x27;})
};

fetch(&#x27;https://api.peec.ai/customer/v1/tags&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/tags&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;name&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;color&#x27; =&gt; &#x27;gray&#x27;,
 &#x27;group&#x27; =&gt; &#x27;persona&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/tags&quot;

	payload := strings.NewReader(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;color\&quot;: \&quot;gray\&quot;,\n \&quot;group\&quot;: \&quot;persona\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/tags&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;color\&quot;: \&quot;gray\&quot;,\n \&quot;group\&quot;: \&quot;persona\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/tags&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;color\&quot;: \&quot;gray\&quot;,\n \&quot;group\&quot;: \&quot;persona\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 201 409 
```
{
 &quot;id&quot;: &quot;tg_23abec5b-100a-4261-9ee7-1effe68f0149&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```
 Project 

# Create Tag

 Create a new tag within a project POST / tags Try it Create Tag cURL 
```
curl --request POST \
 --url https://api.peec.ai/customer/v1/tags \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;color&quot;: &quot;gray&quot;,
 &quot;group&quot;: &quot;persona&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/tags&quot;

payload = {
 &quot;name&quot;: &quot;&lt;string&gt;&quot;,
 &quot;color&quot;: &quot;gray&quot;,
 &quot;group&quot;: &quot;persona&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;POST&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({name: &#x27;&lt;string&gt;&#x27;, color: &#x27;gray&#x27;, group: &#x27;persona&#x27;})
};

fetch(&#x27;https://api.peec.ai/customer/v1/tags&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/tags&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;name&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;color&#x27; =&gt; &#x27;gray&#x27;,
 &#x27;group&#x27; =&gt; &#x27;persona&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/tags&quot;

	payload := strings.NewReader(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;color\&quot;: \&quot;gray\&quot;,\n \&quot;group\&quot;: \&quot;persona\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;POST&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.post(&quot;https://api.peec.ai/customer/v1/tags&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;color\&quot;: \&quot;gray\&quot;,\n \&quot;group\&quot;: \&quot;persona\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/tags&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;name\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;color\&quot;: \&quot;gray\&quot;,\n \&quot;group\&quot;: \&quot;persona\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 201 409 
```
{
 &quot;id&quot;: &quot;tg_23abec5b-100a-4261-9ee7-1effe68f0149&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string required Minimum string length: `1` [​ ](#body-color) color enum&lt;string&gt; default: gray Available options : `gray`, `red`, `orange`, `yellow`, `lime`, `green`, `cyan`, `blue`, `purple`, `fuchsia`, `pink`, `emerald`, `amber`, `violet`, `indigo`, `teal`, `sky`, `rose`, `slate`, `zinc`, `neutral`, `stone` [​ ](#body-group-one-of-0) group string | null Optional tag group. Tags sharing a group are colored as a unit, so a grouped tag inherits the group&#x27;s color and the `color` field is ignored. Minimum string length: `1` Example : `&quot;persona&quot;` 

## Response

 201 application/json Tag created successfully Tag created successfully [​ ](#response-id) id string required Example : `&quot;tg_23abec5b-100a-4261-9ee7-1effe68f0149&quot;` [ List Tags ](/api-reference/project/list-tags)[ Delete Tag ](/api-reference/project/delete-tag) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/create-topic

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/create-topic#webpage","url":"https://docs.peec.ai/api-reference/project/create-topic","name":"Create Topic","description":"Create a new topic within a project","dateModified":"2026-07-17T08:39:39.481Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/create-topic#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/create-topic#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Create Topic","item":"https://docs.peec.ai/api-reference/project/create-topic"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/create-topic#apireference","headline":"Create Topic","name":"Create Topic","description":"Create a new topic within a project","url":"https://docs.peec.ai/api-reference/project/create-topic","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/create-topic#webpage"},"dateModified":"2026-07-17T08:39:39.481Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Create Topic cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/topics \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>" 
 } 
 ' 
```

```
 { 
 "id" : "to_5524d66a-df1e-47e4-9dbc-802af39235ad" 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/topics \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>" 
 } 
 ' 
```

```
 { 
 "id" : "to_5524d66a-df1e-47e4-9dbc-802af39235ad" 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string required Required string length: `1 - 64` [​ ](#body-country-code) country_code enum&lt;string&gt; Available options : `AE`, `AL`, `AM`, `AR`, `AT`, `AU`, `BA`, `BE`, `BG`, `BH`, `BO`, `BR`, `BS`, `BY`, `CA`, `CH`, `CL`, `CN`, `CO`, `CR`, `CY`, `CZ`, `DE`, `DK`, `DO`, `EC`, `EE`, `EG`, `ES`, `FI`, `FR`, `GB`, `GE`, `GH`, `GR`, `GT`, `HK`, `HN`, `HR`, `HU`, `ID`, `IE`, `IL`, `IN`, `IQ`, `IS`, `IT`, `JO`, `JP`, `KR`, `KW`, `LB`, `LI`, `LT`, `LU`, `LV`, `MA`, `MD`, `ME`, `MK`, `MT`, `MX`, `MY`, `NG`, `NI`, `NL`, `NO`, `NZ`, `OM`, `PK`, `PA`, `PE`, `PH`, `PL`, `PT`, `PY`, `PS`, `QA`, `RO`, `RS`, `SA`, `SE`, `SG`, `SI`, `SK`, `SV`, `TH`, `TN`, `TR`, `TW`, `UA`, `US`, `UY`, `VE`, `VN`, `ZA`, `AD`, `AF`, `AS`, `AZ`, `BB`, `BQ`, `CG`, `CI`, `CM`, `CW`, `DM`, `DZ`, `FO`, `GF`, `GP`, `JM`, `KG`, `KH`, `KI`, `KZ`, `LK`, `LR`, `LS`, `MW`, `NC`, `PG`, `TD`, `TF`, `UG`, `VU`, `ZW` 

## Response

 201 application/json Topic created successfully Topic created successfully [​ ](#response-id) id string required Example : ` "to_5524d66a-df1e-47e4-9dbc-802af39235ad" ` [ List Topics ](/api-reference/project/list-topics)[ List Topic Suggestions ](/api-reference/project/list-topic-suggestions) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/delete-brand

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/delete-brand#webpage","url":"https://docs.peec.ai/api-reference/project/delete-brand","name":"Delete Brand","description":"Delete a brand within a project.","dateModified":"2026-07-17T08:39:39.291Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/delete-brand#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/delete-brand#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Delete Brand","item":"https://docs.peec.ai/api-reference/project/delete-brand"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/delete-brand#apireference","headline":"Delete Brand","name":"Delete Brand","description":"Delete a brand within a project.","url":"https://docs.peec.ai/api-reference/project/delete-brand","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/delete-brand#webpage"},"dateModified":"2026-07-17T08:39:39.291Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Delete Brand cURL 
```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/brands/{brand_id} \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/brands/{brand_id} \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/brands/ {brand_id} " headers = { "X-API-Key" : "&#x3C;api-key>" } response = requests.delete(url, headers = headers) print (response.text) ` ` const options = { method: 'DELETE' , headers: { 'X-API-Key' : '&#x3C;api-key>' }}; fetch ( 'https://api.peec.ai/customer/v1/brands/{brand_id}' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/brands/{brand_id}" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => " DELETE " , CURLOPT_HTTPHEADER => [ "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/brands/{brand_id}" 	req , _ := http . NewRequest ( "DELETE" , url , nil ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . delete ( "https://api.peec.ai/customer/v1/brands/{brand_id}" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/brands/{brand_id}" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Delete . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-brand-id) brand_id string required 

## Response

 200 application/json Brand deleted successfully Brand deleted successfully [ Reject Brand Suggestion ](/api-reference/project/reject-brand-suggestion)[ Update Brand ](/api-reference/project/update-brand) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/delete-custom-domain-classification

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/delete-custom-domain-classification#webpage","url":"https://docs.peec.ai/api-reference/project/delete-custom-domain-classification","name":"Delete Custom Domain Classification","description":"Delete a custom domain classification. Cascades through the override table, so any domains currently assigned this classification fall back to their heuristic classification.","dateModified":"2026-07-17T08:39:39.651Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/delete-custom-domain-classification#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/delete-custom-domain-classification#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Delete Custom Domain Classification","item":"https://docs.peec.ai/api-reference/project/delete-custom-domain-classification"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/delete-custom-domain-classification#apireference","headline":"Delete Custom Domain Classification","name":"Delete Custom Domain Classification","description":"Delete a custom domain classification. Cascades through the override table, so any domains currently assigned this classification fall back to their heuristic classification.","url":"https://docs.peec.ai/api-reference/project/delete-custom-domain-classification","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/delete-custom-domain-classification#webpage"},"dateModified":"2026-07-17T08:39:39.651Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Delete Custom Domain Classification cURL 
```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/classifications/domains \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/classifications/domains \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/classifications/domains" payload = { "name" : "&#x3C;string>" , "project_id" : "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" } headers = { "X-API-Key" : "&#x3C;api-key>" , "Content-Type" : "application/json" } response = requests.delete(url, json = payload, headers = headers) print (response.text) ` ` const options = { method: 'DELETE' , headers: { 'X-API-Key' : '&#x3C;api-key>' , 'Content-Type' : 'application/json' }, body: JSON . stringify ({ name: '&#x3C;string>' , project_id: 'or_f45b94ba-5e35-4982-93ed-285e72ee14eb' }) }; fetch ( 'https://api.peec.ai/customer/v1/classifications/domains' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/classifications/domains" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => " DELETE " , CURLOPT_POSTFIELDS => json_encode ([ 'name' => '&#x3C;string>' , 'project_id' => 'or_f45b94ba-5e35-4982-93ed-285e72ee14eb' ]), CURLOPT_HTTPHEADER => [ "Content-Type: application/json" , "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" strings " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/classifications/domains" 	payload := strings . NewReader ( "{ \n \" name \" : \" &#x3C;string> \" , \n \" project_id \" : \" or_f45b94ba-5e35-4982-93ed-285e72ee14eb \"\n }" ) 	req , _ := http . NewRequest ( "DELETE" , url , payload ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	req . Header . Add ( "Content-Type" , "application/json" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . delete ( "https://api.peec.ai/customer/v1/classifications/domains" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . header ( "Content-Type" , "application/json" ) . body ( "{ \n \" name \" : \" &#x3C;string> \" , \n \" project_id \" : \" or_f45b94ba-5e35-4982-93ed-285e72ee14eb \"\n }" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/classifications/domains" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Delete . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' request[ "Content-Type" ] = 'application/json' request. body = "{ \n \" name \" : \" &#x3C;string> \" , \n \" project_id \" : \" or_f45b94ba-5e35-4982-93ed-285e72ee14eb \"\n }" response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string required Required string length: `1 - 60` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 application/json Custom domain classification deleted Custom domain classification deleted [ Create Custom Domain Classification ](/api-reference/project/create-custom-domain-classification)[ Set Domain Classification ](/api-reference/project/set-domain-classification) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/delete-custom-url-classification

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/delete-custom-url-classification#webpage","url":"https://docs.peec.ai/api-reference/project/delete-custom-url-classification","name":"Delete Custom URL Classification","description":"Delete a custom URL classification. Cascades through the override table, so any URLs currently assigned this classification fall back to their heuristic classification.","dateModified":"2026-07-17T08:39:39.691Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/delete-custom-url-classification#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/delete-custom-url-classification#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Delete Custom URL Classification","item":"https://docs.peec.ai/api-reference/project/delete-custom-url-classification"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/delete-custom-url-classification#apireference","headline":"Delete Custom URL Classification","name":"Delete Custom URL Classification","description":"Delete a custom URL classification. Cascades through the override table, so any URLs currently assigned this classification fall back to their heuristic classification.","url":"https://docs.peec.ai/api-reference/project/delete-custom-url-classification","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/delete-custom-url-classification#webpage"},"dateModified":"2026-07-17T08:39:39.691Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Delete Custom URL Classification cURL 
```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/classifications/urls \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```

```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/classifications/urls \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" 
 } 
 ' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/classifications/urls" payload = { "name" : "&#x3C;string>" , "project_id" : "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" } headers = { "X-API-Key" : "&#x3C;api-key>" , "Content-Type" : "application/json" } response = requests.delete(url, json = payload, headers = headers) print (response.text) ` ` const options = { method: 'DELETE' , headers: { 'X-API-Key' : '&#x3C;api-key>' , 'Content-Type' : 'application/json' }, body: JSON . stringify ({ name: '&#x3C;string>' , project_id: 'or_f45b94ba-5e35-4982-93ed-285e72ee14eb' }) }; fetch ( 'https://api.peec.ai/customer/v1/classifications/urls' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/classifications/urls" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => " DELETE " , CURLOPT_POSTFIELDS => json_encode ([ 'name' => '&#x3C;string>' , 'project_id' => 'or_f45b94ba-5e35-4982-93ed-285e72ee14eb' ]), CURLOPT_HTTPHEADER => [ "Content-Type: application/json" , "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" strings " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/classifications/urls" 	payload := strings . NewReader ( "{ \n \" name \" : \" &#x3C;string> \" , \n \" project_id \" : \" or_f45b94ba-5e35-4982-93ed-285e72ee14eb \"\n }" ) 	req , _ := http . NewRequest ( "DELETE" , url , payload ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	req . Header . Add ( "Content-Type" , "application/json" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . delete ( "https://api.peec.ai/customer/v1/classifications/urls" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . header ( "Content-Type" , "application/json" ) . body ( "{ \n \" name \" : \" &#x3C;string> \" , \n \" project_id \" : \" or_f45b94ba-5e35-4982-93ed-285e72ee14eb \"\n }" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/classifications/urls" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Delete . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' request[ "Content-Type" ] = 'application/json' request. body = "{ \n \" name \" : \" &#x3C;string> \" , \n \" project_id \" : \" or_f45b94ba-5e35-4982-93ed-285e72ee14eb \"\n }" response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string required Required string length: `1 - 60` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 application/json Custom URL classification deleted Custom URL classification deleted [ Create Custom URL Classification ](/api-reference/project/create-custom-url-classification)[ Set URL Classification ](/api-reference/project/set-url-classification) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/delete-prompt

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/delete-prompt#webpage","url":"https://docs.peec.ai/api-reference/project/delete-prompt","name":"Delete Prompt","description":"Delete a prompt and cascade to related chats","dateModified":"2026-07-17T08:39:39.360Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/delete-prompt#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/delete-prompt#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Delete Prompt","item":"https://docs.peec.ai/api-reference/project/delete-prompt"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/delete-prompt#apireference","headline":"Delete Prompt","name":"Delete Prompt","description":"Delete a prompt and cascade to related chats","url":"https://docs.peec.ai/api-reference/project/delete-prompt","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/delete-prompt#webpage"},"dateModified":"2026-07-17T08:39:39.360Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Delete Prompt cURL 
```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/prompts/{prompt_id} \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/prompts/{prompt_id} \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/prompts/ {prompt_id} " headers = { "X-API-Key" : "&#x3C;api-key>" } response = requests.delete(url, headers = headers) print (response.text) ` ` const options = { method: 'DELETE' , headers: { 'X-API-Key' : '&#x3C;api-key>' }}; fetch ( 'https://api.peec.ai/customer/v1/prompts/{prompt_id}' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/prompts/{prompt_id}" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => " DELETE " , CURLOPT_HTTPHEADER => [ "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/prompts/{prompt_id}" 	req , _ := http . NewRequest ( "DELETE" , url , nil ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . delete ( "https://api.peec.ai/customer/v1/prompts/{prompt_id}" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/prompts/{prompt_id}" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Delete . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-prompt-id) prompt_id string required 

## Response

 200 application/json Prompt deleted successfully Prompt deleted successfully [ Reject Prompt Suggestion ](/api-reference/project/reject-prompt-suggestion)[ Update Prompt ](/api-reference/project/update-prompt) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/delete-tag

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/delete-tag#webpage","url":"https://docs.peec.ai/api-reference/project/delete-tag","name":"Delete Tag","description":"Delete a tag within a project","dateModified":"2026-07-17T08:39:39.421Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/delete-tag#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/delete-tag#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Delete Tag","item":"https://docs.peec.ai/api-reference/project/delete-tag"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/delete-tag#apireference","headline":"Delete Tag","name":"Delete Tag","description":"Delete a tag within a project","url":"https://docs.peec.ai/api-reference/project/delete-tag","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/delete-tag#webpage"},"dateModified":"2026-07-17T08:39:39.421Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Delete Tag cURL 
```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/tags/{tag_id} \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/tags/{tag_id} \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/tags/ {tag_id} " headers = { "X-API-Key" : "&#x3C;api-key>" } response = requests.delete(url, headers = headers) print (response.text) ` ` const options = { method: 'DELETE' , headers: { 'X-API-Key' : '&#x3C;api-key>' }}; fetch ( 'https://api.peec.ai/customer/v1/tags/{tag_id}' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/tags/{tag_id}" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => " DELETE " , CURLOPT_HTTPHEADER => [ "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/tags/{tag_id}" 	req , _ := http . NewRequest ( "DELETE" , url , nil ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . delete ( "https://api.peec.ai/customer/v1/tags/{tag_id}" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/tags/{tag_id}" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Delete . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' response = http. request (request) puts response. read_body ` 200 403 404 ` {} ` ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-tag-id) tag_id string required 

## Response

 200 application/json Tag deleted successfully Tag deleted successfully [ Create Tag ](/api-reference/project/create-tag)[ Update Tag ](/api-reference/project/update-tag) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/delete-tag-group

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/delete-tag-group#webpage","url":"https://docs.peec.ai/api-reference/project/delete-tag-group","name":"Delete Tag Group","description":"Delete a user-defined tag group. By default the tags are kept and simply ungrouped (their group becomes null); pass delete_tags=true to delete the tags themselves and detach them from every prompt. System groups (branding/intentType) cannot be deleted.","dateModified":"2026-07-17T08:39:39.451Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/delete-tag-group#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/delete-tag-group#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Delete Tag Group","item":"https://docs.peec.ai/api-reference/project/delete-tag-group"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/delete-tag-group#apireference","headline":"Delete Tag Group","name":"Delete Tag Group","description":"Delete a user-defined tag group. By default the tags are kept and simply ungrouped (their group becomes null); pass delete_tags=true to delete the tags themselves and detach them from every prompt. System groups (branding/intentType) cannot be deleted.","url":"https://docs.peec.ai/api-reference/project/delete-tag-group","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/delete-tag-group#webpage"},"dateModified":"2026-07-17T08:39:39.451Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Delete Tag Group cURL 
```
curl --request DELETE \
 --url https://api.peec.ai/customer/v1/tag-groups \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;group&quot;: &quot;persona&quot;,
 &quot;delete_tags&quot;: false
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/tag-groups&quot;

payload = {
 &quot;group&quot;: &quot;persona&quot;,
 &quot;delete_tags&quot;: False
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.delete(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;DELETE&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({group: &#x27;persona&#x27;, delete_tags: false})
};

fetch(&#x27;https://api.peec.ai/customer/v1/tag-groups&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/tag-groups&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;DELETE&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;group&#x27; =&gt; &#x27;persona&#x27;,
 &#x27;delete_tags&#x27; =&gt; false
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/tag-groups&quot;

	payload := strings.NewReader(&quot;{\n \&quot;group\&quot;: \&quot;persona\&quot;,\n \&quot;delete_tags\&quot;: false\n}&quot;)

	req, _ := http.NewRequest(&quot;DELETE&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.delete(&quot;https://api.peec.ai/customer/v1/tag-groups&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;group\&quot;: \&quot;persona\&quot;,\n \&quot;delete_tags\&quot;: false\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/tag-groups&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Delete.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;group\&quot;: \&quot;persona\&quot;,\n \&quot;delete_tags\&quot;: false\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 404 
```
{
 &quot;tag_count&quot;: 123
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```
 Project 

# Delete Tag Group

 Delete a user-defined tag group. By default the tags are kept and simply ungrouped (their `group` becomes null); pass delete_tags=true to delete the tags themselves and detach them from every prompt. System groups (branding/intentType) cannot be deleted. DELETE / tag-groups Try it Delete Tag Group cURL 
```
curl --request DELETE \
 --url https://api.peec.ai/customer/v1/tag-groups \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;group&quot;: &quot;persona&quot;,
 &quot;delete_tags&quot;: false
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/tag-groups&quot;

payload = {
 &quot;group&quot;: &quot;persona&quot;,
 &quot;delete_tags&quot;: False
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.delete(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;DELETE&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({group: &#x27;persona&#x27;, delete_tags: false})
};

fetch(&#x27;https://api.peec.ai/customer/v1/tag-groups&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/tag-groups&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;DELETE&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;group&#x27; =&gt; &#x27;persona&#x27;,
 &#x27;delete_tags&#x27; =&gt; false
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/tag-groups&quot;

	payload := strings.NewReader(&quot;{\n \&quot;group\&quot;: \&quot;persona\&quot;,\n \&quot;delete_tags\&quot;: false\n}&quot;)

	req, _ := http.NewRequest(&quot;DELETE&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.delete(&quot;https://api.peec.ai/customer/v1/tag-groups&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;group\&quot;: \&quot;persona\&quot;,\n \&quot;delete_tags\&quot;: false\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/tag-groups&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Delete.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;group\&quot;: \&quot;persona\&quot;,\n \&quot;delete_tags\&quot;: false\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 404 
```
{
 &quot;tag_count&quot;: 123
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-group) group string required The group name to delete Example : `&quot;persona&quot;` [​ ](#body-delete-tags) delete_tags boolean default: false When true, the group&#x27;s tags are deleted (and removed from all prompts) instead of just being ungrouped. Defaults to false. Example : `false` 

## Response

 200 application/json Group deleted successfully. By default its tags are kept and ungrouped; with delete_tags=true they are deleted. Group deleted successfully. By default its tags are kept and ungrouped; with delete_tags=true they are deleted. [​ ](#response-tag-count) tag_count number required [ List Tag Groups ](/api-reference/project/list-tag-groups)[ Update Tag Group ](/api-reference/project/update-tag-group) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/delete-topic

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/delete-topic#webpage","url":"https://docs.peec.ai/api-reference/project/delete-topic","name":"Delete Topic","description":"Delete a topic, detaching all associated prompts and deleting prompt suggestions","dateModified":"2026-07-17T08:39:39.520Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/delete-topic#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/delete-topic#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Delete Topic","item":"https://docs.peec.ai/api-reference/project/delete-topic"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/delete-topic#apireference","headline":"Delete Topic","name":"Delete Topic","description":"Delete a topic, detaching all associated prompts and deleting prompt suggestions","url":"https://docs.peec.ai/api-reference/project/delete-topic","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/delete-topic#webpage"},"dateModified":"2026-07-17T08:39:39.520Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Delete Topic cURL 
```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/topics/{topic_id} \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 curl --request DELETE \ 
 --url https://api.peec.ai/customer/v1/topics/{topic_id} \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/topics/ {topic_id} " headers = { "X-API-Key" : "&#x3C;api-key>" } response = requests.delete(url, headers = headers) print (response.text) ` ` const options = { method: 'DELETE' , headers: { 'X-API-Key' : '&#x3C;api-key>' }}; fetch ( 'https://api.peec.ai/customer/v1/topics/{topic_id}' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/topics/{topic_id}" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => " DELETE " , CURLOPT_HTTPHEADER => [ "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/topics/{topic_id}" 	req , _ := http . NewRequest ( "DELETE" , url , nil ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . delete ( "https://api.peec.ai/customer/v1/topics/{topic_id}" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/topics/{topic_id}" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Delete . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-topic-id) topic_id string required 

## Response

 200 application/json Topic deleted successfully Topic deleted successfully [ Reject Topic Suggestion ](/api-reference/project/reject-topic-suggestion)[ Update Topic ](/api-reference/project/update-topic) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/get-agent-visits

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/get-agent-visits#webpage","url":"https://docs.peec.ai/api-reference/project/get-agent-visits","name":"Get Agent Visits","description":"Aggregate agent access log visits grouped by a chosen dimension (bot, response status, host, path).","dateModified":"2026-07-17T08:39:39.581Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/get-agent-visits#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/get-agent-visits#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Get Agent Visits","item":"https://docs.peec.ai/api-reference/project/get-agent-visits"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/get-agent-visits#apireference","headline":"Get Agent Visits","name":"Get Agent Visits","description":"Aggregate agent access log visits grouped by a chosen dimension (bot, response status, host, path).","url":"https://docs.peec.ai/api-reference/project/get-agent-visits","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/get-agent-visits#webpage"},"dateModified":"2026-07-17T08:39:39.581Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get Agent Visits cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/agent-analytics/visits \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "bot_id" : "GPTBot" , 
 "visits" : 1402 
 }, 
 { 
 "bot_id" : "AppleBot" , 
 "visits" : 893 
 } 
 ], 
 "total_count" : 2 , 
 "totalCount" : 2 
 } 
```
 Project 

# Get Agent Visits

 Aggregate agent access log visits grouped by a chosen dimension (bot, response status, host, path). GET / agent-analytics / visits Try it Get Agent Visits cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/agent-analytics/visits \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "bot_id" : "GPTBot" , 
 "visits" : 1402 
 }, 
 { 
 "bot_id" : "AppleBot" , 
 "visits" : 893 
 } 
 ], 
 "total_count" : 2 , 
 "totalCount" : 2 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#parameter-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#parameter-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#parameter-group-by) group_by enum&lt;string&gt;[] Dimension(s) to group visit counts by. Available options : `bot_id`, `response_status`, `request_host`, `request_path` Example : ` [ "bot_id" ] ` [​ ](#parameter-bot-ids) bot_ids string[] Optional list of bot IDs to filter by. Example : ` [ "AppleBot" , "GoogleBot" ] ` [​ ](#parameter-time-bucket) time_bucket enum&lt;string&gt; Optional time_bucket for grouping visits by time. Available options : `hour`, `day`, `week`, `month` Example : ` "day" ` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of grouped rows. Example : ` 10 ` [​ ](#response-total-count) totalCount number required deprecated Total number of grouped rows. Example : ` 10 ` [ List Agent logs ](/api-reference/project/list-agent-logs)[ List Chats ](/api-reference/project/list-chats) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/get-chat

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/get-chat#webpage","url":"https://docs.peec.ai/api-reference/project/get-chat","name":"Get Chat","description":"Get a single chat","dateModified":"2026-07-17T08:39:39.600Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/get-chat#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/get-chat#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Get Chat","item":"https://docs.peec.ai/api-reference/project/get-chat"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/get-chat#apireference","headline":"Get Chat","name":"Get Chat","description":"Get a single chat","url":"https://docs.peec.ai/api-reference/project/get-chat","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/get-chat#webpage"},"dateModified":"2026-07-17T08:39:39.600Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get Chat cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/chats/{chat_id}/content \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "id" : "ch_61184892-36ad-4e1a-8178-3a83608f7711" , 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "sources" : [ 
 { 
 "url" : "https://peec.ai/blog#header" , 
 "url_normalized" : "peec.ai/blog" , 
 "urlNormalized" : "peec.ai/blog" , 
 "domain" : "peec.ai" , 
 "citation_count" : 123 , 
 "citationCount" : 123 , 
 "citation_position" : 123 , 
 "citationPosition" : 123 
 } 
 ], 
 "brands_mentioned" : [ 
 { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" , 
 "name" : "Peec AI" , 
 "position" : 123 
 } 
 ], 
 "messages" : [ 
 { 
 "role" : "user" , 
 "content" : "Example Prompt" 
 }, 
 { 
 "role" : "assistant" , 
 "content" : "Example Response" 
 } 
 ], 
 "queries" : [ 
 "best AI search tools 2026" 
 ], 
 "products" : [ 
 { 
 "name" : "Peec AI Pro" , 
 "queries" : [ 
 "buy Peec AI Pro online" 
 ] 
 } 
 ], 
 "features" : [], 
 "maps" : [ 
 { 
 "name" : "J&#x26;F Drainage" , 
 "url" : "https://www.google.com/maps/dir/?api=1&#x26;destination=53.850994%2C-3.009608" 
 } 
 ], 
 "ads" : [ 
 { 
 "brand_name" : "Whoop" , 
 "brandName" : "Whoop" , 
 "url" : "https://www.whoop.com/" , 
 "cards" : [ 
 { 
 "title" : "Win Your Routine" , 
 "body" : "Daily guidance for your goals" , 
 "image_url" : "https://bzrcdn.openai.com/&#x3C;hash>.png" , 
 "imageUrl" : "https://bzrcdn.openai.com/&#x3C;hash>.png" , 
 "target_url" : "https://join.whoop.com/chatgpt4/?utm_source=chatgpt&#x26;utm_medium=cpc" , 
 "targetUrl" : "https://join.whoop.com/chatgpt4/?utm_source=chatgpt&#x26;utm_medium=cpc" 
 } 
 ], 
 "id" : "697cd903185c819684793d8936700e6f" , 
 "ad_unit_type" : "single_advertiser_ad_unit" , 
 "adUnitType" : "single_advertiser_ad_unit" , 
 "ads_request_id" : "069eb308-ae3b-7ae5-8000-641914dcb9b0" , 
 "adsRequestId" : "069eb308-ae3b-7ae5-8000-641914dcb9b0" 
 } 
 ] 
 } 
```

```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/chats/{chat_id}/content \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "id" : "ch_61184892-36ad-4e1a-8178-3a83608f7711" , 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "sources" : [ 
 { 
 "url" : "https://peec.ai/blog#header" , 
 "url_normalized" : "peec.ai/blog" , 
 "urlNormalized" : "peec.ai/blog" , 
 "domain" : "peec.ai" , 
 "citation_count" : 123 , 
 "citationCount" : 123 , 
 "citation_position" : 123 , 
 "citationPosition" : 123 
 } 
 ], 
 "brands_mentioned" : [ 
 { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" , 
 "name" : "Peec AI" , 
 "position" : 123 
 } 
 ], 
 "messages" : [ 
 { 
 "role" : "user" , 
 "content" : "Example Prompt" 
 }, 
 { 
 "role" : "assistant" , 
 "content" : "Example Response" 
 } 
 ], 
 "queries" : [ 
 "best AI search tools 2026" 
 ], 
 "products" : [ 
 { 
 "name" : "Peec AI Pro" , 
 "queries" : [ 
 "buy Peec AI Pro online" 
 ] 
 } 
 ], 
 "features" : [], 
 "maps" : [ 
 { 
 "name" : "J&#x26;F Drainage" , 
 "url" : "https://www.google.com/maps/dir/?api=1&#x26;destination=53.850994%2C-3.009608" 
 } 
 ], 
 "ads" : [ 
 { 
 "brand_name" : "Whoop" , 
 "brandName" : "Whoop" , 
 "url" : "https://www.whoop.com/" , 
 "cards" : [ 
 { 
 "title" : "Win Your Routine" , 
 "body" : "Daily guidance for your goals" , 
 "image_url" : "https://bzrcdn.openai.com/&#x3C;hash>.png" , 
 "imageUrl" : "https://bzrcdn.openai.com/&#x3C;hash>.png" , 
 "target_url" : "https://join.whoop.com/chatgpt4/?utm_source=chatgpt&#x26;utm_medium=cpc" , 
 "targetUrl" : "https://join.whoop.com/chatgpt4/?utm_source=chatgpt&#x26;utm_medium=cpc" 
 } 
 ], 
 "id" : "697cd903185c819684793d8936700e6f" , 
 "ad_unit_type" : "single_advertiser_ad_unit" , 
 "adUnitType" : "single_advertiser_ad_unit" , 
 "ads_request_id" : "069eb308-ae3b-7ae5-8000-641914dcb9b0" , 
 "adsRequestId" : "069eb308-ae3b-7ae5-8000-641914dcb9b0" 
 } 
 ] 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-chat-id) chat_id string required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 application/json Success Success [​ ](#response-id) id string required Example : ` "ch_61184892-36ad-4e1a-8178-3a83608f7711" ` [​ ](#response-prompt) prompt object required Show child attributes [​ ](#response-model) model object required deprecated Deprecated: use model_channel instead Show child attributes [​ ](#response-model-channel) model_channel object required Show child attributes [​ ](#response-sources) sources object[] required Show child attributes [​ ](#response-brands-mentioned) brands_mentioned object[] required Show child attributes [​ ](#response-messages) messages object[] required Show child attributes Example : ` [ { "role" : "user" , "content" : "Example Prompt" }, { "role" : "assistant" , "content" : "Example Response" } ] ` [​ ](#response-queries) queries string[] required [​ ](#response-products) products object[] required Show child attributes [​ ](#response-features) features enum&lt;string&gt;[] required Available options : `SHOPPING`, `PRODUCT_COMPARISON`, `AD`, `MAP`, `WEB_SEARCH` [​ ](#response-maps) maps object[] required Show child attributes [​ ](#response-ads) ads object[] required Show child attributes [ List Chats ](/api-reference/project/list-chats)[ Get Project Profile ](/api-reference/project/get-project-profile) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/get-project-profile

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/get-project-profile#webpage","url":"https://docs.peec.ai/api-reference/project/get-project-profile","name":"Get Project Profile","description":"Read the project's brand profile (description, industry, brand identity, target markets, audience distribution, products & services). Returns { profile: null } if the project hasn't been profiled yet.","dateModified":"2026-07-17T08:39:39.610Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/get-project-profile#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/get-project-profile#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Get Project Profile","item":"https://docs.peec.ai/api-reference/project/get-project-profile"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/get-project-profile#apireference","headline":"Get Project Profile","name":"Get Project Profile","description":"Read the project's brand profile (description, industry, brand identity, target markets, audience distribution, products & services). Returns { profile: null } if the project hasn't been profiled yet.","url":"https://docs.peec.ai/api-reference/project/get-project-profile","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/get-project-profile#webpage"},"dateModified":"2026-07-17T08:39:39.610Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get Project Profile cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/project-profile \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "profile" : { 
 "name" : "&#x3C;string>" , 
 "occupation" : "&#x3C;string>" , 
 "industry" : "&#x3C;string>" , 
 "brand_presentation" : [ 
 "&#x3C;string>" 
 ], 
 "products_and_services" : [ 
 "&#x3C;string>" 
 ], 
 "target_markets" : [ 
 { 
 "location" : "&#x3C;string>" , 
 "osm_id" : "&#x3C;string>" 
 } 
 ], 
 "audience_distribution" : { 
 "simple_recommendation_seeker" : 4503599627370495 , 
 "informed_shopper" : 4503599627370495 , 
 "evaluative_researcher" : 4503599627370495 
 }, 
 "brandPresentation" : [ 
 "&#x3C;string>" 
 ], 
 "productsAndServices" : [ 
 "&#x3C;string>" 
 ], 
 "targetMarkets" : [ 
 { 
 "location" : "&#x3C;string>" , 
 "osmId" : "&#x3C;string>" 
 } 
 ], 
 "audienceDistribution" : { 
 "simpleRecommendationSeeker" : 4503599627370495 , 
 "informedShopper" : 4503599627370495 , 
 "evaluativeResearcher" : 4503599627370495 
 }, 
 "used_prepared_profile" : true , 
 "usedPreparedProfile" : true 
 } 
 } 
```

```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/project-profile \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "profile" : { 
 "name" : "&#x3C;string>" , 
 "occupation" : "&#x3C;string>" , 
 "industry" : "&#x3C;string>" , 
 "brand_presentation" : [ 
 "&#x3C;string>" 
 ], 
 "products_and_services" : [ 
 "&#x3C;string>" 
 ], 
 "target_markets" : [ 
 { 
 "location" : "&#x3C;string>" , 
 "osm_id" : "&#x3C;string>" 
 } 
 ], 
 "audience_distribution" : { 
 "simple_recommendation_seeker" : 4503599627370495 , 
 "informed_shopper" : 4503599627370495 , 
 "evaluative_researcher" : 4503599627370495 
 }, 
 "brandPresentation" : [ 
 "&#x3C;string>" 
 ], 
 "productsAndServices" : [ 
 "&#x3C;string>" 
 ], 
 "targetMarkets" : [ 
 { 
 "location" : "&#x3C;string>" , 
 "osmId" : "&#x3C;string>" 
 } 
 ], 
 "audienceDistribution" : { 
 "simpleRecommendationSeeker" : 4503599627370495 , 
 "informedShopper" : 4503599627370495 , 
 "evaluativeResearcher" : 4503599627370495 
 }, 
 "used_prepared_profile" : true , 
 "usedPreparedProfile" : true 
 } 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 application/json Project profile fetched successfully Project profile fetched successfully [​ ](#response-profile-one-of-0) profile object | null required Show child attributes [ Get Chat ](/api-reference/project/get-chat)[ Set Project Profile ](/api-reference/project/set-project-profile) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-agent-logs

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-agent-logs#webpage","url":"https://docs.peec.ai/api-reference/project/list-agent-logs","name":"List Agent logs","description":"List Agent access logs from your log provider integration or access file upload","dateModified":"2026-07-17T08:39:39.571Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-agent-logs#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-agent-logs#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Agent logs","item":"https://docs.peec.ai/api-reference/project/list-agent-logs"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-agent-logs#apireference","headline":"List Agent logs","name":"List Agent logs","description":"List Agent access logs from your log provider integration or access file upload","url":"https://docs.peec.ai/api-reference/project/list-agent-logs","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-agent-logs#webpage"},"dateModified":"2026-07-17T08:39:39.571Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Agent logs cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/agent-analytics/logs \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "bot_id" : "AppleBot" , 
 "timestamp" : "2025-01-01 00:01:02.000" , 
 "request_method" : "GET" , 
 "request_host" : "example.com" , 
 "request_path" : "/path" , 
 "response_status" : 200 , 
 "user_agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)" , 
 "client_ip" : "127.0.0.1" , 
 "referer" : "notexample.com" 
 } 
 ], 
 "total_count" : 100 , 
 "totalCount" : 100 
 } 
```
 Project 

# List Agent logs

 List Agent access logs from your log provider integration or access file upload GET / agent-analytics / logs Try it List Agent logs cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/agent-analytics/logs \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "bot_id" : "AppleBot" , 
 "timestamp" : "2025-01-01 00:01:02.000" , 
 "request_method" : "GET" , 
 "request_host" : "example.com" , 
 "request_path" : "/path" , 
 "response_status" : 200 , 
 "user_agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)" , 
 "client_ip" : "127.0.0.1" , 
 "referer" : "notexample.com" 
 } 
 ], 
 "total_count" : 100 , 
 "totalCount" : 100 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#parameter-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#parameter-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#parameter-bot-ids) bot_ids enum&lt;string&gt;[] List of bot IDs to filter by. you will get it from /agent-analytics/bots Available options : `GPTBot`, `anthropic-ai`, `Google-Extended`, `Meta-ExternalAgent`, `Applebot-Extended`, `Amazonbot`, `Bytespider`, `CCBot`, `Ai2Bot`, `Ai2Bot-Dolma`, `cohere-ai`, `cohere-training-data-crawler`, `DeepSeekBot`, `PanguBot`, `Webzio-Extended`, `Diffbot`, `FacebookBot`, `omgili`, `Timpibot`, `GrokBot`, `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`, `Amzn-SearchBot`, `AzureAI-SearchBot`, `Google-CloudVertexBot`, `meta-webindexer`, `Applebot`, `Grok-DeepSearch`, `xAI-Grok`, `ChatGPT-User`, `Claude-User`, `Perplexity-User`, `Manus-User`, `GoogleAgent-Mariner`, `NovaAct`, `Gemini-Deep-Research`, `MistralAI-User`, `DuckAssistBot`, `quillbot.com`, `meta-externalfetcher`, `Claude-Code`, `MyCentralAIScraperBot`, `Google-Agent`, `omgilibot`, `ClaudeBot`, `Claude-Web`, `YouBot` Example : ` [ "AppleBot" , "GoogleBot" ] ` 

## Response

 200 - application/json Response for status 200 [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of agent logs in storage Example : ` 100 ` [​ ](#response-total-count) totalCount number required deprecated Total number of agent logs in storage Example : ` 100 ` [ List Bots ](/api-reference/project/list-bots)[ Get Agent Visits ](/api-reference/project/get-agent-visits) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-bots

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-bots#webpage","url":"https://docs.peec.ai/api-reference/project/list-bots","name":"List Bots","description":"List all known AI agent bots from agent analytics.","dateModified":"2026-07-17T08:39:39.560Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-bots#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-bots#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Bots","item":"https://docs.peec.ai/api-reference/project/list-bots"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-bots#apireference","headline":"List Bots","name":"List Bots","description":"List all known AI agent bots from agent analytics.","url":"https://docs.peec.ai/api-reference/project/list-bots","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-bots#webpage"},"dateModified":"2026-07-17T08:39:39.560Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Bots cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/agent-analytics/bots \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "GPTBot" , 
 "provider" : "OpenAI" , 
 "type" : "training" 
 } 
 ] 
 } 
```
 Project 

# List Bots

 List all known AI agent bots from agent analytics. GET / agent-analytics / bots Try it List Bots cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/agent-analytics/bots \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "GPTBot" , 
 "provider" : "OpenAI" , 
 "type" : "training" 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ List Model Channels ](/api-reference/project/list-model-channels)[ List Agent logs ](/api-reference/project/list-agent-logs) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-brand-suggestions

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-brand-suggestions#webpage","url":"https://docs.peec.ai/api-reference/project/list-brand-suggestions","name":"List Brand Suggestions","description":"List the open brand suggestions of a project","dateModified":"2026-07-17T08:39:39.256Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-brand-suggestions#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-brand-suggestions#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Brand Suggestions","item":"https://docs.peec.ai/api-reference/project/list-brand-suggestions"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-brand-suggestions#apireference","headline":"List Brand Suggestions","name":"List Brand Suggestions","description":"List the open brand suggestions of a project","url":"https://docs.peec.ai/api-reference/project/list-brand-suggestions","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-brand-suggestions#webpage"},"dateModified":"2026-07-17T08:39:39.256Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Brand Suggestions cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/brands/suggestions \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" , 
 "name" : "Peec AI" , 
 "chat_count" : 5 , 
 "source" : "competitor" , 
 "domains" : [ 
 "peec.ai" 
 ] 
 } 
 ] 
 } 
```
 Project 

# List Brand Suggestions

 List the open brand suggestions of a project GET / brands / suggestions Try it List Brand Suggestions cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/brands/suggestions \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" , 
 "name" : "Peec AI" , 
 "chat_count" : 5 , 
 "source" : "competitor" , 
 "domains" : [ 
 "peec.ai" 
 ] 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ Create Brand ](/api-reference/project/create-brand)[ Accept Brand Suggestion ](/api-reference/project/accept-brand-suggestion) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-brands

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-brands#webpage","url":"https://docs.peec.ai/api-reference/project/list-brands","name":"List Brands","description":"List the brands of a project","dateModified":"2026-07-17T08:39:39.236Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-brands#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-brands#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Brands","item":"https://docs.peec.ai/api-reference/project/list-brands"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-brands#apireference","headline":"List Brands","name":"List Brands","description":"List the brands of a project","url":"https://docs.peec.ai/api-reference/project/list-brands","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-brands#webpage"},"dateModified":"2026-07-17T08:39:39.236Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Brands cURL 
```
curl --request GET \
 --url https://api.peec.ai/customer/v1/brands \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/brands&quot;

headers = {&quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;}

response = requests.get(url, headers=headers)

print(response.text)
```

```
const options = {method: &#x27;GET&#x27;, headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;}};

fetch(&#x27;https://api.peec.ai/customer/v1/brands&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/brands&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;GET&quot;,
 CURLOPT_HTTPHEADER =&gt; [
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/brands&quot;

	req, _ := http.NewRequest(&quot;GET&quot;, url, nil)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.get(&quot;https://api.peec.ai/customer/v1/brands&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/brands&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;

response = http.request(request)
puts response.read_body
```
 200 
```
{
 &quot;data&quot;: [
 {
 &quot;id&quot;: &quot;kw_915e742b-396d-4a86-ad57-8bc84e8c2232&quot;,
 &quot;name&quot;: &quot;Peec AI&quot;,
 &quot;is_own&quot;: true,
 &quot;color&quot;: &quot;#3b82f6&quot;,
 &quot;domains&quot;: [
 &quot;peec.ai&quot;
 ],
 &quot;aliases&quot;: [
 &quot;Peec&quot;
 ],
 &quot;source&quot;: &quot;manual&quot;
 }
 ],
 &quot;total_count&quot;: 42,
 &quot;totalCount&quot;: 42
}
```
 Project 

# List Brands

 List the brands of a project GET / brands Try it List Brands cURL 
```
curl --request GET \
 --url https://api.peec.ai/customer/v1/brands \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/brands&quot;

headers = {&quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;}

response = requests.get(url, headers=headers)

print(response.text)
```

```
const options = {method: &#x27;GET&#x27;, headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;}};

fetch(&#x27;https://api.peec.ai/customer/v1/brands&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/brands&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;GET&quot;,
 CURLOPT_HTTPHEADER =&gt; [
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/brands&quot;

	req, _ := http.NewRequest(&quot;GET&quot;, url, nil)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.get(&quot;https://api.peec.ai/customer/v1/brands&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/brands&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;

response = http.request(request)
puts response.read_body
```
 200 
```
{
 &quot;data&quot;: [
 {
 &quot;id&quot;: &quot;kw_915e742b-396d-4a86-ad57-8bc84e8c2232&quot;,
 &quot;name&quot;: &quot;Peec AI&quot;,
 &quot;is_own&quot;: true,
 &quot;color&quot;: &quot;#3b82f6&quot;,
 &quot;domains&quot;: [
 &quot;peec.ai&quot;
 ],
 &quot;aliases&quot;: [
 &quot;Peec&quot;
 ],
 &quot;source&quot;: &quot;manual&quot;
 }
 ],
 &quot;total_count&quot;: 42,
 &quot;totalCount&quot;: 42
}
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : `&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of brands, ignoring pagination Example : `42` [​ ](#response-total-count) totalCount number required deprecated Total number of brands, ignoring pagination Example : `42` [ List Fanout Shopping Queries ](/api-reference/project/list-fanout-shopping-queries)[ Create Brand ](/api-reference/project/create-brand) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-chats

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-chats#webpage","url":"https://docs.peec.ai/api-reference/project/list-chats","name":"List Chats","description":"List the chats of a project","dateModified":"2026-07-17T08:39:39.590Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-chats#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-chats#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Chats","item":"https://docs.peec.ai/api-reference/project/list-chats"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-chats#apireference","headline":"List Chats","name":"List Chats","description":"List the chats of a project","url":"https://docs.peec.ai/api-reference/project/list-chats","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-chats#webpage"},"dateModified":"2026-07-17T08:39:39.590Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Chats cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/chats \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "ch_61184892-36ad-4e1a-8178-3a83608f7711" , 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "date" : "2025-09-17" , 
 "features" : [] 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```
 Project 

# List Chats

 List the chats of a project GET / chats Try it List Chats cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/chats \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "ch_61184892-36ad-4e1a-8178-3a83608f7711" , 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "date" : "2025-09-17" , 
 "features" : [] 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#parameter-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#parameter-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#parameter-brand-id) brand_id string [​ ](#parameter-prompt-id) prompt_id string [​ ](#parameter-model-id) model_id enum&lt;string&gt; deprecated Deprecated: use model_channel_id instead Available options : `chatgpt-scraper`, `gpt-4o`, `gpt-4o-search`, `gpt-3.5-turbo`, `llama-sonar`, `perplexity-scraper`, `sonar`, `gemini-2.5-flash`, `gemini-3.1-flash-lite-search`, `gemini-scraper`, `google-ai-overview-scraper`, `google-ai-mode-scraper`, `llama-3.3-70b-instruct`, `deepseek-r1`, `deepseek-v4-pro`, `claude-3.5-haiku`, `claude-haiku-4.5`, `claude-sonnet-4`, `grok-scraper`, `microsoft-copilot-scraper`, `grok-4`, `grok-4.3`, `qwen-3-6-plus`, `qwen-3-7-plus`, `amazon-rufus-scraper`, `mistral-small-4`, `mistral-medium-3-5` [​ ](#parameter-model-channel-id) model_channel_id enum&lt;string&gt; Available options : `openai-0`, `openai-1`, `qwen-0`, `openai-2`, `perplexity-0`, `perplexity-1`, `google-0`, `google-1`, `google-2`, `google-3`, `google-4`, `anthropic-0`, `anthropic-1`, `deepseek-0`, `meta-0`, `xai-0`, `xai-1`, `microsoft-0`, `amazon-0`, `mistral-0`, `mistral-1` [​ ](#parameter-features) features enum&lt;string&gt;[] Available options : `SHOPPING`, `PRODUCT_COMPARISON`, `AD`, `MAP`, `WEB_SEARCH` [​ ](#parameter-include-archived-prompts) include_archived_prompts string [​ ](#parameter-sort) sort enum&lt;string&gt; default: asc Sort order by chat creation time. Defaults to asc (oldest first); use desc to get the most recent chats first. Available options : `asc`, `desc` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of matching chats, ignoring pagination Example : ` 42 ` [​ ](#response-total-count) totalCount number required deprecated Total number of matching chats, ignoring pagination Example : ` 42 ` [ Get Agent Visits ](/api-reference/project/get-agent-visits)[ Get Chat ](/api-reference/project/get-chat) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-custom-domain-classifications

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-custom-domain-classifications#webpage","url":"https://docs.peec.ai/api-reference/project/list-custom-domain-classifications","name":"List Custom Domain Classifications","description":"List the custom domain classifications defined for a project. These complement the built-in classifications and can be assigned to domains.","dateModified":"2026-07-17T08:39:39.630Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-custom-domain-classifications#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-custom-domain-classifications#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Custom Domain Classifications","item":"https://docs.peec.ai/api-reference/project/list-custom-domain-classifications"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-custom-domain-classifications#apireference","headline":"List Custom Domain Classifications","name":"List Custom Domain Classifications","description":"List the custom domain classifications defined for a project. These complement the built-in classifications and can be assigned to domains.","url":"https://docs.peec.ai/api-reference/project/list-custom-domain-classifications","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-custom-domain-classifications#webpage"},"dateModified":"2026-07-17T08:39:39.630Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Custom Domain Classifications cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/classifications/domains \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "name" : "Industry Blog" , 
 "color" : "orange" 
 } 
 ], 
 "total_count" : 5 , 
 "totalCount" : 5 
 } 
```
 Project 

# List Custom Domain Classifications

 List the custom domain classifications defined for a project. These complement the built-in classifications and can be assigned to domains. GET / classifications / domains Try it List Custom Domain Classifications cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/classifications/domains \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "name" : "Industry Blog" , 
 "color" : "orange" 
 } 
 ], 
 "total_count" : 5 , 
 "totalCount" : 5 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of matching custom domain classifications, ignoring pagination Example : ` 5 ` [​ ](#response-total-count) totalCount number required deprecated Total number of matching custom domain classifications, ignoring pagination Example : ` 5 ` [ Set Project Profile ](/api-reference/project/set-project-profile)[ Create Custom Domain Classification ](/api-reference/project/create-custom-domain-classification) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-custom-url-classifications

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-custom-url-classifications#webpage","url":"https://docs.peec.ai/api-reference/project/list-custom-url-classifications","name":"List Custom URL Classifications","description":"List the custom URL classifications defined for a project. These complement the built-in classifications and can be assigned to URLs.","dateModified":"2026-07-17T08:39:39.670Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-custom-url-classifications#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-custom-url-classifications#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Custom URL Classifications","item":"https://docs.peec.ai/api-reference/project/list-custom-url-classifications"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-custom-url-classifications#apireference","headline":"List Custom URL Classifications","name":"List Custom URL Classifications","description":"List the custom URL classifications defined for a project. These complement the built-in classifications and can be assigned to URLs.","url":"https://docs.peec.ai/api-reference/project/list-custom-url-classifications","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-custom-url-classifications#webpage"},"dateModified":"2026-07-17T08:39:39.670Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Custom URL Classifications cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/classifications/urls \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "name" : "Tutorial" , 
 "color" : "orange" 
 } 
 ], 
 "total_count" : 5 , 
 "totalCount" : 5 
 } 
```
 Project 

# List Custom URL Classifications

 List the custom URL classifications defined for a project. These complement the built-in classifications and can be assigned to URLs. GET / classifications / urls Try it List Custom URL Classifications cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/classifications/urls \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "name" : "Tutorial" , 
 "color" : "orange" 
 } 
 ], 
 "total_count" : 5 , 
 "totalCount" : 5 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of matching custom URL classifications, ignoring pagination Example : ` 5 ` [​ ](#response-total-count) totalCount number required deprecated Total number of matching custom URL classifications, ignoring pagination Example : ` 5 ` [ Set Domain Classification ](/api-reference/project/set-domain-classification)[ Create Custom URL Classification ](/api-reference/project/create-custom-url-classification) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-fanout-search-queries

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries#webpage","url":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries","name":"List Fanout Search Queries","description":"List the fanout search queries of a project","dateModified":"2026-07-17T08:39:39.038Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"List Fanout Search Queries","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries#apireference","headline":"List Fanout Search Queries","name":"List Fanout Search Queries","description":"List the fanout search queries of a project","url":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries#webpage"},"dateModified":"2026-07-17T08:39:39.038Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Fanout Search Queries cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/queries/search \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "filters": [ 
 { 
 "field": "prompt_id", 
 "operator": "in", 
 "values": [ 
 "pr_abc123" 
 ] 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "chat" : { 
 "id" : "ch_61184892-36ad-4e1a-8178-3a83608f7711" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "date" : "2025-09-17" , 
 "query" : { 
 "index" : 0 , 
 "text" : "What is Peec?" 
 } 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```
 Project 

# List Fanout Search Queries

 List the fanout search queries of a project POST / queries / search Try it List Fanout Search Queries cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/queries/search \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "filters": [ 
 { 
 "field": "prompt_id", 
 "operator": "in", 
 "values": [ 
 "pr_abc123" 
 ] 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "chat" : { 
 "id" : "ch_61184892-36ad-4e1a-8178-3a83608f7711" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "date" : "2025-09-17" , 
 "query" : { 
 "index" : 0 , 
 "text" : "What is Peec?" 
 } 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#body-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-filters) filters object[] Filter results by specific fields. Multiple filters are AND&#x27;d together. Deprecated: use model_channel_id filter instead Option 1 Option 2 Option 3 Option 4 Option 5 Option 6 Show child attributes Example : ` [ { "field" : "prompt_id" , "operator" : "in" , "values" : [ "pr_abc123" ] } ] ` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of matching search queries, ignoring pagination Example : ` 42 ` [​ ](#response-total-count) totalCount number required deprecated Total number of matching search queries, ignoring pagination Example : ` 42 ` [ Get URL Content ](/api-reference/reports/get-url-content)[ List Fanout Shopping Queries ](/api-reference/project/list-fanout-shopping-queries) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-fanout-shopping-queries

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-fanout-shopping-queries#webpage","url":"https://docs.peec.ai/api-reference/project/list-fanout-shopping-queries","name":"List Fanout Shopping Queries","description":"List the fanout shopping queries of a project","dateModified":"2026-07-17T08:39:39.049Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-fanout-shopping-queries#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-fanout-shopping-queries#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Fanout Shopping Queries","item":"https://docs.peec.ai/api-reference/project/list-fanout-shopping-queries"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-fanout-shopping-queries#apireference","headline":"List Fanout Shopping Queries","name":"List Fanout Shopping Queries","description":"List the fanout shopping queries of a project","url":"https://docs.peec.ai/api-reference/project/list-fanout-shopping-queries","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-fanout-shopping-queries#webpage"},"dateModified":"2026-07-17T08:39:39.049Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Fanout Shopping Queries cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/queries/shopping \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "filters": [ 
 { 
 "field": "prompt_id", 
 "operator": "in", 
 "values": [ 
 "pr_abc123" 
 ] 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "chat" : { 
 "id" : "ch_61184892-36ad-4e1a-8178-3a83608f7711" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "date" : "2025-09-17" , 
 "query" : { 
 "text" : "What is Peec?" , 
 "products" : [ 
 "Peec AI" , 
 "Peec Pro" 
 ] 
 } 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```
 Project 

# List Fanout Shopping Queries

 List the fanout shopping queries of a project POST / queries / shopping Try it List Fanout Shopping Queries cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/queries/shopping \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "filters": [ 
 { 
 "field": "prompt_id", 
 "operator": "in", 
 "values": [ 
 "pr_abc123" 
 ] 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "chat" : { 
 "id" : "ch_61184892-36ad-4e1a-8178-3a83608f7711" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "date" : "2025-09-17" , 
 "query" : { 
 "text" : "What is Peec?" , 
 "products" : [ 
 "Peec AI" , 
 "Peec Pro" 
 ] 
 } 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#body-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-filters) filters object[] Filter results by specific fields. Multiple filters are AND&#x27;d together. Deprecated: use model_channel_id filter instead Option 1 Option 2 Option 3 Option 4 Option 5 Option 6 Show child attributes Example : ` [ { "field" : "prompt_id" , "operator" : "in" , "values" : [ "pr_abc123" ] } ] ` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of matching shopping queries, ignoring pagination Example : ` 42 ` [​ ](#response-total-count) totalCount number required deprecated Total number of matching shopping queries, ignoring pagination Example : ` 42 ` [ List Fanout Search Queries ](/api-reference/project/list-fanout-search-queries)[ List Brands ](/api-reference/project/list-brands) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-model-channels

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-model-channels#webpage","url":"https://docs.peec.ai/api-reference/project/list-model-channels","name":"List Model Channels","description":"List the model channels","dateModified":"2026-07-17T08:39:39.550Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-model-channels#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-model-channels#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Model Channels","item":"https://docs.peec.ai/api-reference/project/list-model-channels"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-model-channels#apireference","headline":"List Model Channels","name":"List Model Channels","description":"List the model channels","url":"https://docs.peec.ai/api-reference/project/list-model-channels","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-model-channels#webpage"},"dateModified":"2026-07-17T08:39:39.550Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Model Channels cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/model-channels \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "openai-0" , 
 "description" : "ChatGPT" , 
 "current_model" : { 
 "id" : "chatgpt-scraper" 
 }, 
 "is_active" : true , 
 "unsupported_country_codes" : [] 
 }, 
 { 
 "id" : "amazon-0" , 
 "description" : "Amazon Rufus UI" , 
 "current_model" : { 
 "id" : "amazon-rufus-scraper" 
 }, 
 "is_active" : true , 
 "unsupported_country_codes" : [ 
 "AE" , 
 "AR" , 
 "AT" 
 ] 
 } 
 ] 
 } 
```
 Project 

# List Model Channels

 List the model channels GET / model-channels Try it List Model Channels cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/model-channels \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "openai-0" , 
 "description" : "ChatGPT" , 
 "current_model" : { 
 "id" : "chatgpt-scraper" 
 }, 
 "is_active" : true , 
 "unsupported_country_codes" : [] 
 }, 
 { 
 "id" : "amazon-0" , 
 "description" : "Amazon Rufus UI" , 
 "current_model" : { 
 "id" : "amazon-rufus-scraper" 
 }, 
 "is_active" : true , 
 "unsupported_country_codes" : [ 
 "AE" , 
 "AR" , 
 "AT" 
 ] 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ List Models ](/api-reference/project/list-models)[ List Bots ](/api-reference/project/list-bots) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-models

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-models#webpage","url":"https://docs.peec.ai/api-reference/project/list-models","name":"List Models","description":"Deprecated: use List Model Channels instead.","dateModified":"2026-07-17T08:39:39.540Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-models#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-models#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Models","item":"https://docs.peec.ai/api-reference/project/list-models"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-models#apireference","headline":"List Models","name":"List Models","description":"Deprecated: use List Model Channels instead.","url":"https://docs.peec.ai/api-reference/project/list-models","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-models#webpage"},"dateModified":"2026-07-17T08:39:39.540Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Models cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/models \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "chatgpt-scraper" , 
 "name" : "ChatGPT" , 
 "is_active" : true 
 }, 
 { 
 "id" : "gpt-4o-search" , 
 "name" : "GPT 5 Search" , 
 "is_active" : true 
 }, 
 { 
 "id" : "perplexity-scraper" , 
 "name" : "Perplexity" , 
 "is_active" : true 
 } 
 ] 
 } 
```
 Project 

# List Models

 deprecated Deprecated: use List Model Channels instead. GET / models Try it List Models cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/models \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "chatgpt-scraper" , 
 "name" : "ChatGPT" , 
 "is_active" : true 
 }, 
 { 
 "id" : "gpt-4o-search" , 
 "name" : "GPT 5 Search" , 
 "is_active" : true 
 }, 
 { 
 "id" : "perplexity-scraper" , 
 "name" : "Perplexity" , 
 "is_active" : true 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ Update Topic ](/api-reference/project/update-topic)[ List Model Channels ](/api-reference/project/list-model-channels) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-prompt-suggestions

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-prompt-suggestions#webpage","url":"https://docs.peec.ai/api-reference/project/list-prompt-suggestions","name":"List Prompt Suggestions","description":"List the prompt suggestions of a project","dateModified":"2026-07-17T08:39:39.330Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-prompt-suggestions#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-prompt-suggestions#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Prompt Suggestions","item":"https://docs.peec.ai/api-reference/project/list-prompt-suggestions"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-prompt-suggestions#apireference","headline":"List Prompt Suggestions","name":"List Prompt Suggestions","description":"List the prompt suggestions of a project","url":"https://docs.peec.ai/api-reference/project/list-prompt-suggestions","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-prompt-suggestions#webpage"},"dateModified":"2026-07-17T08:39:39.330Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Prompt Suggestions cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/prompts/suggestions \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "ps_93f790de-5b7a-45ee-b782-61103c81f20d" , 
 "messages" : [ 
 { 
 "content" : "What is the best SEO tool?" 
 } 
 ], 
 "tags" : [ 
 { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 } 
 ], 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "user_location" : {}, 
 "volume" : 123 
 } 
 ] 
 } 
```
 Project 

# List Prompt Suggestions

 List the prompt suggestions of a project GET / prompts / suggestions Try it List Prompt Suggestions cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/prompts/suggestions \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "ps_93f790de-5b7a-45ee-b782-61103c81f20d" , 
 "messages" : [ 
 { 
 "content" : "What is the best SEO tool?" 
 } 
 ], 
 "tags" : [ 
 { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 } 
 ], 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "user_location" : {}, 
 "volume" : 123 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-topic-id) topic_id string [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ Create Prompt ](/api-reference/project/create-prompt)[ Accept Prompt Suggestion ](/api-reference/project/accept-prompt-suggestion) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-prompts

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-prompts#webpage","url":"https://docs.peec.ai/api-reference/project/list-prompts","name":"List Prompts","description":"List the prompts of a project","dateModified":"2026-07-17T08:39:39.311Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-prompts#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-prompts#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Prompts","item":"https://docs.peec.ai/api-reference/project/list-prompts"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-prompts#apireference","headline":"List Prompts","name":"List Prompts","description":"List the prompts of a project","url":"https://docs.peec.ai/api-reference/project/list-prompts","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-prompts#webpage"},"dateModified":"2026-07-17T08:39:39.311Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Prompts cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/prompts \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" , 
 "messages" : [ 
 { 
 "content" : "Example Prompt" 
 } 
 ], 
 "tags" : [ 
 { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 } 
 ], 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "user_location" : {}, 
 "is_archived" : false , 
 "volume" : 123 , 
 "created_at" : "2025-09-22" 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 , 
 "search_truncated" : true 
 } 
```
 Project 

# List Prompts

 List the prompts of a project GET / prompts Try it List Prompts cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/prompts \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" , 
 "messages" : [ 
 { 
 "content" : "Example Prompt" 
 } 
 ], 
 "tags" : [ 
 { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 } 
 ], 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "user_location" : {}, 
 "is_archived" : false , 
 "volume" : 123 , 
 "created_at" : "2025-09-22" 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 , 
 "search_truncated" : true 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-topic-id) topic_id string [​ ](#parameter-tag-id) tag_id string [​ ](#parameter-is-archived) is_archived string Filter by archived status. Omit (or ` false `) to return only active prompts; ` true ` to return only archived prompts. [​ ](#parameter-start-date) start_date string&lt;date&gt; Only return prompts created on or after this date (UTC). Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#parameter-end-date) end_date string&lt;date&gt; Only return prompts created on or before this date (UTC). Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` [​ ](#parameter-search) search string Free-text search over prompt text. Fuzzy and word-order-insensitive; results are ordered by relevance (best match first). Required string length: `1 - 500` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of matching prompts, ignoring pagination Example : ` 42 ` [​ ](#response-total-count) totalCount number required deprecated Total number of matching prompts, ignoring pagination Example : ` 42 ` [​ ](#response-search-truncated) search_truncated boolean Only present when ` search ` is used. True when the project has more prompts than the search scan limit (20000); only the most recent 20000 prompts were searched, so matches may be missing and total_count may undercount. [ Update Brand ](/api-reference/project/update-brand)[ Create Prompt ](/api-reference/project/create-prompt) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-tag-groups

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-tag-groups#webpage","url":"https://docs.peec.ai/api-reference/project/list-tag-groups","name":"List Tag Groups","description":"List the user-defined tag groups of a project (distinct non-empty group values across the project's tags), each with its shared color and tag count. System groups (branding/intentType) are not included — see List Tags for those.","dateModified":"2026-07-17T08:39:39.440Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-tag-groups#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-tag-groups#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Tag Groups","item":"https://docs.peec.ai/api-reference/project/list-tag-groups"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-tag-groups#apireference","headline":"List Tag Groups","name":"List Tag Groups","description":"List the user-defined tag groups of a project (distinct non-empty group values across the project's tags), each with its shared color and tag count. System groups (branding/intentType) are not included — see List Tags for those.","url":"https://docs.peec.ai/api-reference/project/list-tag-groups","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-tag-groups#webpage"},"dateModified":"2026-07-17T08:39:39.440Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Tag Groups cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/tag-groups \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "group" : "persona" , 
 "color" : "blue" , 
 "tag_count" : 3 
 } 
 ] 
 } 
```
 Project 

# List Tag Groups

 List the user-defined tag groups of a project (distinct non-empty `group` values across the project’s tags), each with its shared color and tag count. System groups (branding/intentType) are not included — see List Tags for those. GET / tag-groups Try it List Tag Groups cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/tag-groups \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "group" : "persona" , 
 "color" : "blue" , 
 "tag_count" : 3 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ Update Tag ](/api-reference/project/update-tag)[ Delete Tag Group ](/api-reference/project/delete-tag-group) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-tags

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-tags#webpage","url":"https://docs.peec.ai/api-reference/project/list-tags","name":"List Tags","description":"List the tags of a project. Tags include user-created tags and Peec-managed system tags (is_system=true). Each tag carries a group: for system tags this is the mutually-exclusive dimension (branding or intentType); for user tags it is the user-defined group name (or null). Pass group to filter to a single user-defined group. System tags cannot be edited or deleted.","dateModified":"2026-07-17T08:39:39.400Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-tags#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-tags#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Tags","item":"https://docs.peec.ai/api-reference/project/list-tags"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-tags#apireference","headline":"List Tags","name":"List Tags","description":"List the tags of a project. Tags include user-created tags and Peec-managed system tags (is_system=true). Each tag carries a group: for system tags this is the mutually-exclusive dimension (branding or intentType); for user tags it is the user-defined group name (or null). Pass group to filter to a single user-defined group. System tags cannot be edited or deleted.","url":"https://docs.peec.ai/api-reference/project/list-tags","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-tags#webpage"},"dateModified":"2026-07-17T08:39:39.400Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Tags cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/tags \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" , 
 "name" : "SEO" , 
 "group" : "branding" , 
 "is_system" : false 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```
 Project 

# List Tags

 List the tags of a project. Tags include user-created tags and Peec-managed system tags (is_system=true). Each tag carries a `group`: for system tags this is the mutually-exclusive dimension (branding or intentType); for user tags it is the user-defined group name (or null). Pass `group` to filter to a single user-defined group. System tags cannot be edited or deleted. GET / tags Try it List Tags cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/tags \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" , 
 "name" : "SEO" , 
 "group" : "branding" , 
 "is_system" : false 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#parameter-group) group string Filter to tags in this user-defined group (matches the ` group ` column exactly). Example : ` "persona" ` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of matching tags, ignoring pagination Example : ` 42 ` [​ ](#response-total-count) totalCount number required deprecated Total number of matching tags, ignoring pagination Example : ` 42 ` [ Unarchive Prompt ](/api-reference/project/unarchive-prompt)[ Create Tag ](/api-reference/project/create-tag) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-topic-suggestions

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-topic-suggestions#webpage","url":"https://docs.peec.ai/api-reference/project/list-topic-suggestions","name":"List Topic Suggestions","description":"List the topic suggestions of a project","dateModified":"2026-07-17T08:39:39.492Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-topic-suggestions#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-topic-suggestions#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Topic Suggestions","item":"https://docs.peec.ai/api-reference/project/list-topic-suggestions"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-topic-suggestions#apireference","headline":"List Topic Suggestions","name":"List Topic Suggestions","description":"List the topic suggestions of a project","url":"https://docs.peec.ai/api-reference/project/list-topic-suggestions","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-topic-suggestions#webpage"},"dateModified":"2026-07-17T08:39:39.492Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Topic Suggestions cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/topics/suggestions \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "to_5524d66a-df1e-47e4-9dbc-802af39235ad" , 
 "name" : "SEO" 
 } 
 ] 
 } 
```
 Project 

# List Topic Suggestions

 List the topic suggestions of a project GET / topics / suggestions Try it List Topic Suggestions cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/topics/suggestions \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "to_5524d66a-df1e-47e4-9dbc-802af39235ad" , 
 "name" : "SEO" 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ Create Topic ](/api-reference/project/create-topic)[ Accept Topic Suggestion ](/api-reference/project/accept-topic-suggestion) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/list-topics

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/list-topics#webpage","url":"https://docs.peec.ai/api-reference/project/list-topics","name":"List Topics","description":"List the topics of a project","dateModified":"2026-07-17T08:39:39.471Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/list-topics#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/list-topics#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"List Topics","item":"https://docs.peec.ai/api-reference/project/list-topics"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/list-topics#apireference","headline":"List Topics","name":"List Topics","description":"List the topics of a project","url":"https://docs.peec.ai/api-reference/project/list-topics","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/list-topics#webpage"},"dateModified":"2026-07-17T08:39:39.471Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) List Topics cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/topics \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "to_5524d66a-df1e-47e4-9dbc-802af39235ad" , 
 "name" : "SEO" 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```
 Project 

# List Topics

 List the topics of a project GET / topics Try it List Topics cURL 
```
 curl --request GET \ 
 --url https://api.peec.ai/customer/v1/topics \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 { 
 "data" : [ 
 { 
 "id" : "to_5524d66a-df1e-47e4-9dbc-802af39235ad" , 
 "name" : "SEO" 
 } 
 ], 
 "total_count" : 42 , 
 "totalCount" : 42 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#parameter-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#parameter-offset) offset number default: 0 Required range : `x &gt;= 0` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [​ ](#response-total-count) total_count number required Total number of matching topics, ignoring pagination Example : ` 42 ` [​ ](#response-total-count) totalCount number required deprecated Total number of matching topics, ignoring pagination Example : ` 42 ` [ Update Tag Group ](/api-reference/project/update-tag-group)[ Create Topic ](/api-reference/project/create-topic) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/reject-brand-suggestion

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/reject-brand-suggestion#webpage","url":"https://docs.peec.ai/api-reference/project/reject-brand-suggestion","name":"Reject Brand Suggestion","description":"Reject a brand suggestion by ID, removing it from the project and preventing it from being re-suggested","dateModified":"2026-07-17T08:39:39.281Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/reject-brand-suggestion#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/reject-brand-suggestion#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Reject Brand Suggestion","item":"https://docs.peec.ai/api-reference/project/reject-brand-suggestion"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/reject-brand-suggestion#apireference","headline":"Reject Brand Suggestion","name":"Reject Brand Suggestion","description":"Reject a brand suggestion by ID, removing it from the project and preventing it from being re-suggested","url":"https://docs.peec.ai/api-reference/project/reject-brand-suggestion","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/reject-brand-suggestion#webpage"},"dateModified":"2026-07-17T08:39:39.281Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Reject Brand Suggestion cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/brands/suggestions/{brand_suggestion_id}/reject \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/brands/suggestions/{brand_suggestion_id}/reject \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/brands/suggestions/ {brand_suggestion_id} /reject" headers = { "X-API-Key" : "&#x3C;api-key>" } response = requests.post(url, headers = headers) print (response.text) ` ` const options = { method: 'POST' , headers: { 'X-API-Key' : '&#x3C;api-key>' }}; fetch ( 'https://api.peec.ai/customer/v1/brands/suggestions/{brand_suggestion_id}/reject' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/brands/suggestions/{brand_suggestion_id}/reject" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "POST" , CURLOPT_HTTPHEADER => [ "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/brands/suggestions/{brand_suggestion_id}/reject" 	req , _ := http . NewRequest ( "POST" , url , nil ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . post ( "https://api.peec.ai/customer/v1/brands/suggestions/{brand_suggestion_id}/reject" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/brands/suggestions/{brand_suggestion_id}/reject" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Post . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-brand-suggestion-id) brand_suggestion_id string required 

## Response

 200 application/json Brand suggestion rejected successfully Brand suggestion rejected successfully [ Accept Brand Suggestion ](/api-reference/project/accept-brand-suggestion)[ Delete Brand ](/api-reference/project/delete-brand) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/reject-prompt-suggestion

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/reject-prompt-suggestion#webpage","url":"https://docs.peec.ai/api-reference/project/reject-prompt-suggestion","name":"Reject Prompt Suggestion","description":"Reject a prompt suggestion by ID, deleting it","dateModified":"2026-07-17T08:39:39.351Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/reject-prompt-suggestion#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/reject-prompt-suggestion#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Reject Prompt Suggestion","item":"https://docs.peec.ai/api-reference/project/reject-prompt-suggestion"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/reject-prompt-suggestion#apireference","headline":"Reject Prompt Suggestion","name":"Reject Prompt Suggestion","description":"Reject a prompt suggestion by ID, deleting it","url":"https://docs.peec.ai/api-reference/project/reject-prompt-suggestion","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/reject-prompt-suggestion#webpage"},"dateModified":"2026-07-17T08:39:39.351Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Reject Prompt Suggestion cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts/suggestions/{prompt_suggestion_id}/reject \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts/suggestions/{prompt_suggestion_id}/reject \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/prompts/suggestions/ {prompt_suggestion_id} /reject" headers = { "X-API-Key" : "&#x3C;api-key>" } response = requests.post(url, headers = headers) print (response.text) ` ` const options = { method: 'POST' , headers: { 'X-API-Key' : '&#x3C;api-key>' }}; fetch ( 'https://api.peec.ai/customer/v1/prompts/suggestions/{prompt_suggestion_id}/reject' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/prompts/suggestions/{prompt_suggestion_id}/reject" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "POST" , CURLOPT_HTTPHEADER => [ "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/prompts/suggestions/{prompt_suggestion_id}/reject" 	req , _ := http . NewRequest ( "POST" , url , nil ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . post ( "https://api.peec.ai/customer/v1/prompts/suggestions/{prompt_suggestion_id}/reject" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/prompts/suggestions/{prompt_suggestion_id}/reject" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Post . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-prompt-suggestion-id) prompt_suggestion_id string required 

## Response

 200 application/json Prompt suggestion rejected successfully Prompt suggestion rejected successfully [ Accept Prompt Suggestion ](/api-reference/project/accept-prompt-suggestion)[ Delete Prompt ](/api-reference/project/delete-prompt) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/reject-topic-suggestion

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/reject-topic-suggestion#webpage","url":"https://docs.peec.ai/api-reference/project/reject-topic-suggestion","name":"Reject Topic Suggestion","description":"Reject a topic suggestion by ID, deleting it and its associated prompt suggestions","dateModified":"2026-07-17T08:39:39.511Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/reject-topic-suggestion#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/reject-topic-suggestion#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Reject Topic Suggestion","item":"https://docs.peec.ai/api-reference/project/reject-topic-suggestion"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/reject-topic-suggestion#apireference","headline":"Reject Topic Suggestion","name":"Reject Topic Suggestion","description":"Reject a topic suggestion by ID, deleting it and its associated prompt suggestions","url":"https://docs.peec.ai/api-reference/project/reject-topic-suggestion","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/reject-topic-suggestion#webpage"},"dateModified":"2026-07-17T08:39:39.511Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Reject Topic Suggestion cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/topics/suggestions/{topic_suggestion_id}/reject \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/topics/suggestions/{topic_suggestion_id}/reject \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/topics/suggestions/ {topic_suggestion_id} /reject" headers = { "X-API-Key" : "&#x3C;api-key>" } response = requests.post(url, headers = headers) print (response.text) ` ` const options = { method: 'POST' , headers: { 'X-API-Key' : '&#x3C;api-key>' }}; fetch ( 'https://api.peec.ai/customer/v1/topics/suggestions/{topic_suggestion_id}/reject' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/topics/suggestions/{topic_suggestion_id}/reject" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "POST" , CURLOPT_HTTPHEADER => [ "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/topics/suggestions/{topic_suggestion_id}/reject" 	req , _ := http . NewRequest ( "POST" , url , nil ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . post ( "https://api.peec.ai/customer/v1/topics/suggestions/{topic_suggestion_id}/reject" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/topics/suggestions/{topic_suggestion_id}/reject" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Post . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-topic-suggestion-id) topic_suggestion_id string required 

## Response

 200 application/json Topic suggestion rejected successfully Topic suggestion rejected successfully [ Accept Topic Suggestion ](/api-reference/project/accept-topic-suggestion)[ Delete Topic ](/api-reference/project/delete-topic) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/set-domain-classification

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/set-domain-classification#webpage","url":"https://docs.peec.ai/api-reference/project/set-domain-classification","name":"Set Domain Classification","description":"Assign a built-in or custom classification to a domain (overriding any heuristic classification), or clear the assignment by passing null.","dateModified":"2026-07-17T08:39:39.660Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/set-domain-classification#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/set-domain-classification#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Set Domain Classification","item":"https://docs.peec.ai/api-reference/project/set-domain-classification"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/set-domain-classification#apireference","headline":"Set Domain Classification","name":"Set Domain Classification","description":"Assign a built-in or custom classification to a domain (overriding any heuristic classification), or clear the assignment by passing null.","url":"https://docs.peec.ai/api-reference/project/set-domain-classification","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/set-domain-classification#webpage"},"dateModified":"2026-07-17T08:39:39.660Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Set Domain Classification cURL 
```
curl --request PUT \
 --url https://api.peec.ai/customer/v1/classifications/domain-assignments \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;domain&quot;: &quot;&lt;string&gt;&quot;,
 &quot;classification&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;

payload = {
 &quot;domain&quot;: &quot;&lt;string&gt;&quot;,
 &quot;classification&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.put(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;PUT&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 domain: &#x27;&lt;string&gt;&#x27;,
 classification: &#x27;&lt;string&gt;&#x27;,
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/classifications/domain-assignments&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;PUT&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;domain&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;classification&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;

	payload := strings.NewReader(&quot;{\n \&quot;domain\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;PUT&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.put(&quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;domain\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Put.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;domain\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 400 404 
```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```
 Project 

# Set Domain Classification

 Assign a built-in or custom classification to a domain (overriding any heuristic classification), or clear the assignment by passing null. PUT / classifications / domain-assignments Try it Set Domain Classification cURL 
```
curl --request PUT \
 --url https://api.peec.ai/customer/v1/classifications/domain-assignments \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;domain&quot;: &quot;&lt;string&gt;&quot;,
 &quot;classification&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;

payload = {
 &quot;domain&quot;: &quot;&lt;string&gt;&quot;,
 &quot;classification&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.put(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;PUT&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 domain: &#x27;&lt;string&gt;&#x27;,
 classification: &#x27;&lt;string&gt;&#x27;,
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/classifications/domain-assignments&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;PUT&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;domain&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;classification&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;

	payload := strings.NewReader(&quot;{\n \&quot;domain\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;PUT&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.put(&quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;domain\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/classifications/domain-assignments&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Put.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;domain\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 400 404 
```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-domain) domain string required Domain to classify (any host or apex — the override applies at apex granularity) Minimum string length: `1` [​ ](#body-classification-one-of-0) classification string | null required Built-in classification (CORPORATE, EDITORIAL, INSTITUTIONAL, OTHER, REFERENCE, UGC, COMPETITOR, OWN, RELATED) or the name of a custom domain classification. Pass null to clear the assignment. Required string length: `1 - 60` [​ ](#body-project-id) project_id string Required if using a company api key Example : `&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;` 

## Response

 200 application/json Domain classification assignment updated Domain classification assignment updated [ Delete Custom Domain Classification ](/api-reference/project/delete-custom-domain-classification)[ List Custom URL Classifications ](/api-reference/project/list-custom-url-classifications) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/set-project-profile

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/set-project-profile#webpage","url":"https://docs.peec.ai/api-reference/project/set-project-profile","name":"Set Project Profile","description":"Replace the project's brand profile. All fields are required — the entire profile is overwritten. Triggers a background refresh of prompt suggestions. Audience distribution percentages must sum to 100. The project's display name is not part of the profile and cannot be changed via this endpoint. Returns 403 while the project is in onboarding.","dateModified":"2026-07-17T08:39:39.620Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/set-project-profile#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/set-project-profile#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Set Project Profile","item":"https://docs.peec.ai/api-reference/project/set-project-profile"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/set-project-profile#apireference","headline":"Set Project Profile","name":"Set Project Profile","description":"Replace the project's brand profile. All fields are required — the entire profile is overwritten. Triggers a background refresh of prompt suggestions. Audience distribution percentages must sum to 100. The project's display name is not part of the profile and cannot be changed via this endpoint. Returns 403 while the project is in onboarding.","url":"https://docs.peec.ai/api-reference/project/set-project-profile","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/set-project-profile#webpage"},"dateModified":"2026-07-17T08:39:39.620Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Set Project Profile cURL 
```
 curl --request PUT \ 
 --url https://api.peec.ai/customer/v1/project-profile \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "occupation": "&#x3C;string>", 
 "industry": "&#x3C;string>", 
 "brand_presentation": [ 
 "&#x3C;string>" 
 ], 
 "brandPresentation": [ 
 "&#x3C;string>" 
 ], 
 "products_and_services": [ 
 "&#x3C;string>" 
 ], 
 "productsAndServices": [ 
 "&#x3C;string>" 
 ], 
 "target_markets": [ 
 { 
 "location": "&#x3C;string>", 
 "osm_id": "&#x3C;string>", 
 "osmId": "&#x3C;string>" 
 } 
 ], 
 "targetMarkets": [ 
 { 
 "location": "&#x3C;string>", 
 "osm_id": "&#x3C;string>", 
 "osmId": "&#x3C;string>" 
 } 
 ], 
 "audience_distribution": { 
 "simple_recommendation_seeker": 4503599627370495, 
 "simpleRecommendationSeeker": 4503599627370495, 
 "informed_shopper": 4503599627370495, 
 "informedShopper": 4503599627370495, 
 "evaluative_researcher": 4503599627370495, 
 "evaluativeResearcher": 4503599627370495 
 }, 
 "audienceDistribution": { 
 "simple_recommendation_seeker": 4503599627370495, 
 "simpleRecommendationSeeker": 4503599627370495, 
 "informed_shopper": 4503599627370495, 
 "informedShopper": 4503599627370495, 
 "evaluative_researcher": 4503599627370495, 
 "evaluativeResearcher": 4503599627370495 
 } 
 } 
 ' 
```

```
 curl --request PUT \ 
 --url https://api.peec.ai/customer/v1/project-profile \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "occupation": "&#x3C;string>", 
 "industry": "&#x3C;string>", 
 "brand_presentation": [ 
 "&#x3C;string>" 
 ], 
 "brandPresentation": [ 
 "&#x3C;string>" 
 ], 
 "products_and_services": [ 
 "&#x3C;string>" 
 ], 
 "productsAndServices": [ 
 "&#x3C;string>" 
 ], 
 "target_markets": [ 
 { 
 "location": "&#x3C;string>", 
 "osm_id": "&#x3C;string>", 
 "osmId": "&#x3C;string>" 
 } 
 ], 
 "targetMarkets": [ 
 { 
 "location": "&#x3C;string>", 
 "osm_id": "&#x3C;string>", 
 "osmId": "&#x3C;string>" 
 } 
 ], 
 "audience_distribution": { 
 "simple_recommendation_seeker": 4503599627370495, 
 "simpleRecommendationSeeker": 4503599627370495, 
 "informed_shopper": 4503599627370495, 
 "informedShopper": 4503599627370495, 
 "evaluative_researcher": 4503599627370495, 
 "evaluativeResearcher": 4503599627370495 
 }, 
 "audienceDistribution": { 
 "simple_recommendation_seeker": 4503599627370495, 
 "simpleRecommendationSeeker": 4503599627370495, 
 "informed_shopper": 4503599627370495, 
 "informedShopper": 4503599627370495, 
 "evaluative_researcher": 4503599627370495, 
 "evaluativeResearcher": 4503599627370495 
 } 
 } 
 ' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/project-profile" payload = { "occupation" : "&#x3C;string>" , "industry" : "&#x3C;string>" , "brand_presentation" : [ "&#x3C;string>" ], "brandPresentation" : [ "&#x3C;string>" ], "products_and_services" : [ "&#x3C;string>" ], "productsAndServices" : [ "&#x3C;string>" ], "target_markets" : [ { "location" : "&#x3C;string>" , "osm_id" : "&#x3C;string>" , "osmId" : "&#x3C;string>" } ], "targetMarkets" : [ { "location" : "&#x3C;string>" , "osm_id" : "&#x3C;string>" , "osmId" : "&#x3C;string>" } ], "audience_distribution" : { "simple_recommendation_seeker" : 4503599627370495 , "simpleRecommendationSeeker" : 4503599627370495 , "informed_shopper" : 4503599627370495 , "informedShopper" : 4503599627370495 , "evaluative_researcher" : 4503599627370495 , "evaluativeResearcher" : 4503599627370495 }, "audienceDistribution" : { "simple_recommendation_seeker" : 4503599627370495 , "simpleRecommendationSeeker" : 4503599627370495 , "informed_shopper" : 4503599627370495 , "informedShopper" : 4503599627370495 , "evaluative_researcher" : 4503599627370495 , "evaluativeResearcher" : 4503599627370495 } } headers = { "X-API-Key" : "&#x3C;api-key>" , "Content-Type" : "application/json" } response = requests.put(url, json = payload, headers = headers) print (response.text) ` ` const options = { method: 'PUT' , headers: { 'X-API-Key' : '&#x3C;api-key>' , 'Content-Type' : 'application/json' }, body: JSON . stringify ({ occupation: '&#x3C;string>' , industry: '&#x3C;string>' , brand_presentation: [ '&#x3C;string>' ], brandPresentation: [ '&#x3C;string>' ], products_and_services: [ '&#x3C;string>' ], productsAndServices: [ '&#x3C;string>' ], target_markets: [{ location: '&#x3C;string>' , osm_id: '&#x3C;string>' , osmId: '&#x3C;string>' }], targetMarkets: [{ location: '&#x3C;string>' , osm_id: '&#x3C;string>' , osmId: '&#x3C;string>' }], audience_distribution: { simple_recommendation_seeker: 4503599627370495 , simpleRecommendationSeeker: 4503599627370495 , informed_shopper: 4503599627370495 , informedShopper: 4503599627370495 , evaluative_researcher: 4503599627370495 , evaluativeResearcher: 4503599627370495 }, audienceDistribution: { simple_recommendation_seeker: 4503599627370495 , simpleRecommendationSeeker: 4503599627370495 , informed_shopper: 4503599627370495 , informedShopper: 4503599627370495 , evaluative_researcher: 4503599627370495 , evaluativeResearcher: 4503599627370495 } }) }; fetch ( 'https://api.peec.ai/customer/v1/project-profile' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/project-profile" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "PUT" , CURLOPT_POSTFIELDS => json_encode ([ 'occupation' => '&#x3C;string>' , 'industry' => '&#x3C;string>' , 'brand_presentation' => [ '&#x3C;string>' ], 'brandPresentation' => [ '&#x3C;string>' ], 'products_and_services' => [ '&#x3C;string>' ], 'productsAndServices' => [ '&#x3C;string>' ], 'target_markets' => [ [ 'location' => '&#x3C;string>' , 'osm_id' => '&#x3C;string>' , 'osmId' => '&#x3C;string>' ] ], 'targetMarkets' => [ [ 'location' => '&#x3C;string>' , 'osm_id' => '&#x3C;string>' , 'osmId' => '&#x3C;string>' ] ], 'audience_distribution' => [ 'simple_recommendation_seeker' => 4503599627370495 , 'simpleRecommendationSeeker' => 4503599627370495 , 'informed_shopper' => 4503599627370495 , 'informedShopper' => 4503599627370495 , 'evaluative_researcher' => 4503599627370495 , 'evaluativeResearcher' => 4503599627370495 ], 'audienceDistribution' => [ 'simple_recommendation_seeker' => 4503599627370495 , 'simpleRecommendationSeeker' => 4503599627370495 , 'informed_shopper' => 4503599627370495 , 'informedShopper' => 4503599627370495 , 'evaluative_researcher' => 4503599627370495 , 'evaluativeResearcher' => 4503599627370495 ] ]), CURLOPT_HTTPHEADER => [ "Content-Type: application/json" , "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" strings " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/project-profile" 	payload := strings . NewReader ( "{ \n \" occupation \" : \" &#x3C;string> \" , \n \" industry \" : \" &#x3C;string> \" , \n \" brand_presentation \" : [ \n \" &#x3C;string> \"\n ], \n \" brandPresentation \" : [ \n \" &#x3C;string> \"\n ], \n \" products_and_services \" : [ \n \" &#x3C;string> \"\n ], \n \" productsAndServices \" : [ \n \" &#x3C;string> \"\n ], \n \" target_markets \" : [ \n { \n \" location \" : \" &#x3C;string> \" , \n \" osm_id \" : \" &#x3C;string> \" , \n \" osmId \" : \" &#x3C;string> \"\n } \n ], \n \" targetMarkets \" : [ \n { \n \" location \" : \" &#x3C;string> \" , \n \" osm_id \" : \" &#x3C;string> \" , \n \" osmId \" : \" &#x3C;string> \"\n } \n ], \n \" audience_distribution \" : { \n \" simple_recommendation_seeker \" : 4503599627370495, \n \" simpleRecommendationSeeker \" : 4503599627370495, \n \" informed_shopper \" : 4503599627370495, \n \" informedShopper \" : 4503599627370495, \n \" evaluative_researcher \" : 4503599627370495, \n \" evaluativeResearcher \" : 4503599627370495 \n }, \n \" audienceDistribution \" : { \n \" simple_recommendation_seeker \" : 4503599627370495, \n \" simpleRecommendationSeeker \" : 4503599627370495, \n \" informed_shopper \" : 4503599627370495, \n \" informedShopper \" : 4503599627370495, \n \" evaluative_researcher \" : 4503599627370495, \n \" evaluativeResearcher \" : 4503599627370495 \n } \n }" ) 	req , _ := http . NewRequest ( "PUT" , url , payload ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	req . Header . Add ( "Content-Type" , "application/json" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . put ( "https://api.peec.ai/customer/v1/project-profile" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . header ( "Content-Type" , "application/json" ) . body ( "{ \n \" occupation \" : \" &#x3C;string> \" , \n \" industry \" : \" &#x3C;string> \" , \n \" brand_presentation \" : [ \n \" &#x3C;string> \"\n ], \n \" brandPresentation \" : [ \n \" &#x3C;string> \"\n ], \n \" products_and_services \" : [ \n \" &#x3C;string> \"\n ], \n \" productsAndServices \" : [ \n \" &#x3C;string> \"\n ], \n \" target_markets \" : [ \n { \n \" location \" : \" &#x3C;string> \" , \n \" osm_id \" : \" &#x3C;string> \" , \n \" osmId \" : \" &#x3C;string> \"\n } \n ], \n \" targetMarkets \" : [ \n { \n \" location \" : \" &#x3C;string> \" , \n \" osm_id \" : \" &#x3C;string> \" , \n \" osmId \" : \" &#x3C;string> \"\n } \n ], \n \" audience_distribution \" : { \n \" simple_recommendation_seeker \" : 4503599627370495, \n \" simpleRecommendationSeeker \" : 4503599627370495, \n \" informed_shopper \" : 4503599627370495, \n \" informedShopper \" : 4503599627370495, \n \" evaluative_researcher \" : 4503599627370495, \n \" evaluativeResearcher \" : 4503599627370495 \n }, \n \" audienceDistribution \" : { \n \" simple_recommendation_seeker \" : 4503599627370495, \n \" simpleRecommendationSeeker \" : 4503599627370495, \n \" informed_shopper \" : 4503599627370495, \n \" informedShopper \" : 4503599627370495, \n \" evaluative_researcher \" : 4503599627370495, \n \" evaluativeResearcher \" : 4503599627370495 \n } \n }" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/project-profile" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Put . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' request[ "Content-Type" ] = 'application/json' request. body = "{ \n \" occupation \" : \" &#x3C;string> \" , \n \" industry \" : \" &#x3C;string> \" , \n \" brand_presentation \" : [ \n \" &#x3C;string> \"\n ], \n \" brandPresentation \" : [ \n \" &#x3C;string> \"\n ], \n \" products_and_services \" : [ \n \" &#x3C;string> \"\n ], \n \" productsAndServices \" : [ \n \" &#x3C;string> \"\n ], \n \" target_markets \" : [ \n { \n \" location \" : \" &#x3C;string> \" , \n \" osm_id \" : \" &#x3C;string> \" , \n \" osmId \" : \" &#x3C;string> \"\n } \n ], \n \" targetMarkets \" : [ \n { \n \" location \" : \" &#x3C;string> \" , \n \" osm_id \" : \" &#x3C;string> \" , \n \" osmId \" : \" &#x3C;string> \"\n } \n ], \n \" audience_distribution \" : { \n \" simple_recommendation_seeker \" : 4503599627370495, \n \" simpleRecommendationSeeker \" : 4503599627370495, \n \" informed_shopper \" : 4503599627370495, \n \" informedShopper \" : 4503599627370495, \n \" evaluative_researcher \" : 4503599627370495, \n \" evaluativeResearcher \" : 4503599627370495 \n }, \n \" audienceDistribution \" : { \n \" simple_recommendation_seeker \" : 4503599627370495, \n \" simpleRecommendationSeeker \" : 4503599627370495, \n \" informed_shopper \" : 4503599627370495, \n \" informedShopper \" : 4503599627370495, \n \" evaluative_researcher \" : 4503599627370495, \n \" evaluativeResearcher \" : 4503599627370495 \n } \n }" response = http. request (request) puts response. read_body ` 200 403 404 ` {} ` ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-occupation) occupation string required Minimum string length: `1` [​ ](#body-industry) industry string required Minimum string length: `1` [​ ](#body-brand-presentation) brand_presentation string[] Minimum array length: `1` Minimum string length: `1` [​ ](#body-brand-presentation) brandPresentation string[] deprecated Minimum array length: `1` Minimum string length: `1` [​ ](#body-products-and-services) products_and_services string[] Minimum array length: `1` Minimum string length: `1` [​ ](#body-products-and-services) productsAndServices string[] deprecated Minimum array length: `1` Minimum string length: `1` [​ ](#body-target-markets) target_markets object[] Minimum array length: `1` Show child attributes [​ ](#body-target-markets) targetMarkets object[] deprecated Minimum array length: `1` Show child attributes [​ ](#body-audience-distribution) audience_distribution object Show child attributes [​ ](#body-audience-distribution) audienceDistribution object deprecated Show child attributes 

## Response

 200 application/json Project profile set successfully Project profile set successfully [ Get Project Profile ](/api-reference/project/get-project-profile)[ List Custom Domain Classifications ](/api-reference/project/list-custom-domain-classifications) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/set-url-classification

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/set-url-classification#webpage","url":"https://docs.peec.ai/api-reference/project/set-url-classification","name":"Set URL Classification","description":"Assign a built-in or custom classification to a URL (overriding any heuristic classification), or clear the assignment by passing null.","dateModified":"2026-07-17T08:39:39.701Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/set-url-classification#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/set-url-classification#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Set URL Classification","item":"https://docs.peec.ai/api-reference/project/set-url-classification"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/set-url-classification#apireference","headline":"Set URL Classification","name":"Set URL Classification","description":"Assign a built-in or custom classification to a URL (overriding any heuristic classification), or clear the assignment by passing null.","url":"https://docs.peec.ai/api-reference/project/set-url-classification","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/set-url-classification#webpage"},"dateModified":"2026-07-17T08:39:39.701Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Set URL Classification cURL 
```
curl --request PUT \
 --url https://api.peec.ai/customer/v1/classifications/url-assignments \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;url&quot;: &quot;&lt;string&gt;&quot;,
 &quot;classification&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;

payload = {
 &quot;url&quot;: &quot;&lt;string&gt;&quot;,
 &quot;classification&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.put(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;PUT&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 url: &#x27;&lt;string&gt;&#x27;,
 classification: &#x27;&lt;string&gt;&#x27;,
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/classifications/url-assignments&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;PUT&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;url&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;classification&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;

	payload := strings.NewReader(&quot;{\n \&quot;url\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;PUT&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.put(&quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;url\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Put.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;url\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 400 404 
```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```
 Project 

# Set URL Classification

 Assign a built-in or custom classification to a URL (overriding any heuristic classification), or clear the assignment by passing null. PUT / classifications / url-assignments Try it Set URL Classification cURL 
```
curl --request PUT \
 --url https://api.peec.ai/customer/v1/classifications/url-assignments \
 --header &#x27;Content-Type: application/json&#x27; \
 --header &#x27;X-API-Key: &lt;api-key&gt;&#x27; \
 --data &#x27;
{
 &quot;url&quot;: &quot;&lt;string&gt;&quot;,
 &quot;classification&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
&#x27;
```

```
import requests

url = &quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;

payload = {
 &quot;url&quot;: &quot;&lt;string&gt;&quot;,
 &quot;classification&quot;: &quot;&lt;string&gt;&quot;,
 &quot;project_id&quot;: &quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;
}
headers = {
 &quot;X-API-Key&quot;: &quot;&lt;api-key&gt;&quot;,
 &quot;Content-Type&quot;: &quot;application/json&quot;
}

response = requests.put(url, json=payload, headers=headers)

print(response.text)
```

```
const options = {
 method: &#x27;PUT&#x27;,
 headers: {&#x27;X-API-Key&#x27;: &#x27;&lt;api-key&gt;&#x27;, &#x27;Content-Type&#x27;: &#x27;application/json&#x27;},
 body: JSON.stringify({
 url: &#x27;&lt;string&gt;&#x27;,
 classification: &#x27;&lt;string&gt;&#x27;,
 project_id: &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 })
};

fetch(&#x27;https://api.peec.ai/customer/v1/classifications/url-assignments&#x27;, options)
 .then(res =&gt; res.json())
 .then(res =&gt; console.log(res))
 .catch(err =&gt; console.error(err));
```

```
&lt;?php

$curl = curl_init();

curl_setopt_array($curl, [
 CURLOPT_URL =&gt; &quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;,
 CURLOPT_RETURNTRANSFER =&gt; true,
 CURLOPT_ENCODING =&gt; &quot;&quot;,
 CURLOPT_MAXREDIRS =&gt; 10,
 CURLOPT_TIMEOUT =&gt; 30,
 CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST =&gt; &quot;PUT&quot;,
 CURLOPT_POSTFIELDS =&gt; json_encode([
 &#x27;url&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;classification&#x27; =&gt; &#x27;&lt;string&gt;&#x27;,
 &#x27;project_id&#x27; =&gt; &#x27;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&#x27;
 ]),
 CURLOPT_HTTPHEADER =&gt; [
 &quot;Content-Type: application/json&quot;,
 &quot;X-API-Key: &lt;api-key&gt;&quot;
 ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
 echo &quot;cURL Error #:&quot; . $err;
} else {
 echo $response;
}
```

```
package main

import (
	&quot;fmt&quot;
	&quot;strings&quot;
	&quot;net/http&quot;
	&quot;io&quot;
)

func main() {

	url := &quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;

	payload := strings.NewReader(&quot;{\n \&quot;url\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)

	req, _ := http.NewRequest(&quot;PUT&quot;, url, payload)

	req.Header.Add(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
	req.Header.Add(&quot;Content-Type&quot;, &quot;application/json&quot;)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(string(body))

}
```

```
HttpResponse&lt;String&gt; response = Unirest.put(&quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;)
 .header(&quot;X-API-Key&quot;, &quot;&lt;api-key&gt;&quot;)
 .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
 .body(&quot;{\n \&quot;url\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;)
 .asString();
```

```
require &#x27;uri&#x27;
require &#x27;net/http&#x27;

url = URI(&quot;https://api.peec.ai/customer/v1/classifications/url-assignments&quot;)

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Put.new(url)
request[&quot;X-API-Key&quot;] = &#x27;&lt;api-key&gt;&#x27;
request[&quot;Content-Type&quot;] = &#x27;application/json&#x27;
request.body = &quot;{\n \&quot;url\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;classification\&quot;: \&quot;&lt;string&gt;\&quot;,\n \&quot;project_id\&quot;: \&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb\&quot;\n}&quot;

response = http.request(request)
puts response.read_body
```
 200 400 404 
```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

```
{
 &quot;message&quot;: &quot;&lt;string&gt;&quot;
}
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-url) url string required URL to classify. The override applies to the normalized form, so it covers every source row that canonicalizes to the same URL. Minimum string length: `1` [​ ](#body-classification-one-of-0) classification string | null required Built-in classification (HOMEPAGE, CATEGORY_PAGE, PRODUCT_PAGE, LISTICLE, COMPARISON, PROFILE, ALTERNATIVE, DISCUSSION, HOW_TO_GUIDE, ARTICLE, OTHER) or the name of a custom URL classification. Pass null to clear the assignment. Required string length: `1 - 60` [​ ](#body-project-id) project_id string Required if using a company api key Example : `&quot;or_f45b94ba-5e35-4982-93ed-285e72ee14eb&quot;` 

## Response

 200 application/json URL classification assignment updated URL classification assignment updated [ Delete Custom URL Classification ](/api-reference/project/delete-custom-url-classification)[ List Products ](/api-reference/products/list-products) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/unarchive-prompt

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/unarchive-prompt#webpage","url":"https://docs.peec.ai/api-reference/project/unarchive-prompt","name":"Unarchive Prompt","description":"Unarchive a prompt (is_archived = false), reactivating it. Subject to the project's active-prompt plan limit","dateModified":"2026-07-17T08:39:39.391Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/unarchive-prompt#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/unarchive-prompt#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Unarchive Prompt","item":"https://docs.peec.ai/api-reference/project/unarchive-prompt"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/unarchive-prompt#apireference","headline":"Unarchive Prompt","name":"Unarchive Prompt","description":"Unarchive a prompt (is_archived = false), reactivating it. Subject to the project's active-prompt plan limit","url":"https://docs.peec.ai/api-reference/project/unarchive-prompt","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/unarchive-prompt#webpage"},"dateModified":"2026-07-17T08:39:39.391Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Unarchive Prompt cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts/{prompt_id}/unarchive \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/prompts/{prompt_id}/unarchive \ 
 --header 'X-API-Key: &#x3C;api-key>' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/prompts/ {prompt_id} /unarchive" headers = { "X-API-Key" : "&#x3C;api-key>" } response = requests.post(url, headers = headers) print (response.text) ` ` const options = { method: 'POST' , headers: { 'X-API-Key' : '&#x3C;api-key>' }}; fetch ( 'https://api.peec.ai/customer/v1/prompts/{prompt_id}/unarchive' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/prompts/{prompt_id}/unarchive" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "POST" , CURLOPT_HTTPHEADER => [ "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/prompts/{prompt_id}/unarchive" 	req , _ := http . NewRequest ( "POST" , url , nil ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . post ( "https://api.peec.ai/customer/v1/prompts/{prompt_id}/unarchive" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/prompts/{prompt_id}/unarchive" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Post . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' response = http. request (request) puts response. read_body ` 200 402 404 ` {} ` ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-prompt-id) prompt_id string required 

## Response

 200 application/json Prompt unarchived successfully Prompt unarchived successfully [ Archive Prompt ](/api-reference/project/archive-prompt)[ List Tags ](/api-reference/project/list-tags) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/update-brand

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/update-brand#webpage","url":"https://docs.peec.ai/api-reference/project/update-brand","name":"Update Brand","description":"Update a brand within a project. Changes to name, regex, or aliases trigger a background recalculation of metrics. While recalculation is in progress, further updates to these fields are blocked (409 Conflict) until it completes.","dateModified":"2026-07-17T08:39:39.301Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/update-brand#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/update-brand#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Update Brand","item":"https://docs.peec.ai/api-reference/project/update-brand"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/update-brand#apireference","headline":"Update Brand","name":"Update Brand","description":"Update a brand within a project. Changes to name, regex, or aliases trigger a background recalculation of metrics. While recalculation is in progress, further updates to these fields are blocked (409 Conflict) until it completes.","url":"https://docs.peec.ai/api-reference/project/update-brand","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/update-brand#webpage"},"dateModified":"2026-07-17T08:39:39.301Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Update Brand cURL 
```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/brands/{brand_id} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "regex": "&#x3C;string>", 
 "aliases": [ 
 "&#x3C;string>" 
 ], 
 "domains": [ 
 "&#x3C;string>" 
 ], 
 "color": "&#x3C;string>" 
 } 
 ' 
```

```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/brands/{brand_id} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "regex": "&#x3C;string>", 
 "aliases": [ 
 "&#x3C;string>" 
 ], 
 "domains": [ 
 "&#x3C;string>" 
 ], 
 "color": "&#x3C;string>" 
 } 
 ' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/brands/ {brand_id} " payload = { "name" : "&#x3C;string>" , "regex" : "&#x3C;string>" , "aliases" : [ "&#x3C;string>" ], "domains" : [ "&#x3C;string>" ], "color" : "&#x3C;string>" } headers = { "X-API-Key" : "&#x3C;api-key>" , "Content-Type" : "application/json" } response = requests.patch(url, json = payload, headers = headers) print (response.text) ` ` const options = { method: 'PATCH' , headers: { 'X-API-Key' : '&#x3C;api-key>' , 'Content-Type' : 'application/json' }, body: JSON . stringify ({ name: '&#x3C;string>' , regex: '&#x3C;string>' , aliases: [ '&#x3C;string>' ], domains: [ '&#x3C;string>' ], color: '&#x3C;string>' }) }; fetch ( 'https://api.peec.ai/customer/v1/brands/{brand_id}' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/brands/{brand_id}" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "PATCH" , CURLOPT_POSTFIELDS => json_encode ([ 'name' => '&#x3C;string>' , 'regex' => '&#x3C;string>' , 'aliases' => [ '&#x3C;string>' ], 'domains' => [ '&#x3C;string>' ], 'color' => '&#x3C;string>' ]), CURLOPT_HTTPHEADER => [ "Content-Type: application/json" , "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" strings " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/brands/{brand_id}" 	payload := strings . NewReader ( "{ \n \" name \" : \" &#x3C;string> \" , \n \" regex \" : \" &#x3C;string> \" , \n \" aliases \" : [ \n \" &#x3C;string> \"\n ], \n \" domains \" : [ \n \" &#x3C;string> \"\n ], \n \" color \" : \" &#x3C;string> \"\n }" ) 	req , _ := http . NewRequest ( "PATCH" , url , payload ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	req . Header . Add ( "Content-Type" , "application/json" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . patch ( "https://api.peec.ai/customer/v1/brands/{brand_id}" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . header ( "Content-Type" , "application/json" ) . body ( "{ \n \" name \" : \" &#x3C;string> \" , \n \" regex \" : \" &#x3C;string> \" , \n \" aliases \" : [ \n \" &#x3C;string> \"\n ], \n \" domains \" : [ \n \" &#x3C;string> \"\n ], \n \" color \" : \" &#x3C;string> \"\n }" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/brands/{brand_id}" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Patch . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' request[ "Content-Type" ] = 'application/json' request. body = "{ \n \" name \" : \" &#x3C;string> \" , \n \" regex \" : \" &#x3C;string> \" , \n \" aliases \" : [ \n \" &#x3C;string> \"\n ], \n \" domains \" : [ \n \" &#x3C;string> \"\n ], \n \" color \" : \" &#x3C;string> \"\n }" response = http. request (request) puts response. read_body ` 200 400 404 409 ` {} ` ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-brand-id) brand_id string required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string Triggers metric recalculation when changed Minimum string length: `1` [​ ](#body-regex-one-of-0) regex string | null Triggers metric recalculation when changed [​ ](#body-aliases) aliases string[] Triggers metric recalculation when changed [​ ](#body-domains) domains string[] [​ ](#body-color) color string Hex color like #1A2B3C 

## Response

 200 application/json Brand updated successfully Brand updated successfully [ Delete Brand ](/api-reference/project/delete-brand)[ List Prompts ](/api-reference/project/list-prompts) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/update-prompt

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/update-prompt#webpage","url":"https://docs.peec.ai/api-reference/project/update-prompt","name":"Update Prompt","description":"Update a prompt's topic and tags within a project","dateModified":"2026-07-17T08:39:39.370Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/update-prompt#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/update-prompt#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Update Prompt","item":"https://docs.peec.ai/api-reference/project/update-prompt"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/update-prompt#apireference","headline":"Update Prompt","name":"Update Prompt","description":"Update a prompt's topic and tags within a project","url":"https://docs.peec.ai/api-reference/project/update-prompt","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/update-prompt#webpage"},"dateModified":"2026-07-17T08:39:39.370Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Update Prompt cURL 
```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/prompts/{prompt_id} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "topic_id": "&#x3C;string>", 
 "tag_ids": [ 
 "&#x3C;string>" 
 ] 
 } 
 ' 
```

```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/prompts/{prompt_id} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "topic_id": "&#x3C;string>", 
 "tag_ids": [ 
 "&#x3C;string>" 
 ] 
 } 
 ' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/prompts/ {prompt_id} " payload = { "topic_id" : "&#x3C;string>" , "tag_ids" : [ "&#x3C;string>" ] } headers = { "X-API-Key" : "&#x3C;api-key>" , "Content-Type" : "application/json" } response = requests.patch(url, json = payload, headers = headers) print (response.text) ` ` const options = { method: 'PATCH' , headers: { 'X-API-Key' : '&#x3C;api-key>' , 'Content-Type' : 'application/json' }, body: JSON . stringify ({ topic_id: '&#x3C;string>' , tag_ids: [ '&#x3C;string>' ]}) }; fetch ( 'https://api.peec.ai/customer/v1/prompts/{prompt_id}' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/prompts/{prompt_id}" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "PATCH" , CURLOPT_POSTFIELDS => json_encode ([ 'topic_id' => '&#x3C;string>' , 'tag_ids' => [ '&#x3C;string>' ] ]), CURLOPT_HTTPHEADER => [ "Content-Type: application/json" , "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" strings " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/prompts/{prompt_id}" 	payload := strings . NewReader ( "{ \n \" topic_id \" : \" &#x3C;string> \" , \n \" tag_ids \" : [ \n \" &#x3C;string> \"\n ] \n }" ) 	req , _ := http . NewRequest ( "PATCH" , url , payload ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	req . Header . Add ( "Content-Type" , "application/json" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . patch ( "https://api.peec.ai/customer/v1/prompts/{prompt_id}" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . header ( "Content-Type" , "application/json" ) . body ( "{ \n \" topic_id \" : \" &#x3C;string> \" , \n \" tag_ids \" : [ \n \" &#x3C;string> \"\n ] \n }" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/prompts/{prompt_id}" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Patch . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' request[ "Content-Type" ] = 'application/json' request. body = "{ \n \" topic_id \" : \" &#x3C;string> \" , \n \" tag_ids \" : [ \n \" &#x3C;string> \"\n ] \n }" response = http. request (request) puts response. read_body ` 200 404 ` {} ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-prompt-id) prompt_id string required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-topic-id-one-of-0) topic_id string | null [​ ](#body-tag-ids) tag_ids string[] 

## Response

 200 application/json Prompt updated successfully Prompt updated successfully [ Delete Prompt ](/api-reference/project/delete-prompt)[ Archive Prompt ](/api-reference/project/archive-prompt) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/update-tag

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/update-tag#webpage","url":"https://docs.peec.ai/api-reference/project/update-tag","name":"Update Tag","description":"Update a tag within a project","dateModified":"2026-07-17T08:39:39.430Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/update-tag#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/update-tag#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Update Tag","item":"https://docs.peec.ai/api-reference/project/update-tag"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/update-tag#apireference","headline":"Update Tag","name":"Update Tag","description":"Update a tag within a project","url":"https://docs.peec.ai/api-reference/project/update-tag","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/update-tag#webpage"},"dateModified":"2026-07-17T08:39:39.430Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Update Tag cURL 
```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/tags/{tag_id} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "group": "persona" 
 } 
 ' 
```

```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/tags/{tag_id} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>", 
 "group": "persona" 
 } 
 ' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/tags/ {tag_id} " payload = { "name" : "&#x3C;string>" , "group" : "persona" } headers = { "X-API-Key" : "&#x3C;api-key>" , "Content-Type" : "application/json" } response = requests.patch(url, json = payload, headers = headers) print (response.text) ` ` const options = { method: 'PATCH' , headers: { 'X-API-Key' : '&#x3C;api-key>' , 'Content-Type' : 'application/json' }, body: JSON . stringify ({ name: '&#x3C;string>' , group: 'persona' }) }; fetch ( 'https://api.peec.ai/customer/v1/tags/{tag_id}' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/tags/{tag_id}" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "PATCH" , CURLOPT_POSTFIELDS => json_encode ([ 'name' => '&#x3C;string>' , 'group' => 'persona' ]), CURLOPT_HTTPHEADER => [ "Content-Type: application/json" , "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" strings " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/tags/{tag_id}" 	payload := strings . NewReader ( "{ \n \" name \" : \" &#x3C;string> \" , \n \" group \" : \" persona \"\n }" ) 	req , _ := http . NewRequest ( "PATCH" , url , payload ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	req . Header . Add ( "Content-Type" , "application/json" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . patch ( "https://api.peec.ai/customer/v1/tags/{tag_id}" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . header ( "Content-Type" , "application/json" ) . body ( "{ \n \" name \" : \" &#x3C;string> \" , \n \" group \" : \" persona \"\n }" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/tags/{tag_id}" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Patch . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' request[ "Content-Type" ] = 'application/json' request. body = "{ \n \" name \" : \" &#x3C;string> \" , \n \" group \" : \" persona \"\n }" response = http. request (request) puts response. read_body ` 200 403 404 409 ` {} ` ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-tag-id) tag_id string required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string Minimum string length: `1` [​ ](#body-color) color enum&lt;string&gt; Available options : `gray`, `red`, `orange`, `yellow`, `lime`, `green`, `cyan`, `blue`, `purple`, `fuchsia`, `pink`, `emerald`, `amber`, `violet`, `indigo`, `teal`, `sky`, `rose`, `slate`, `zinc`, `neutral`, `stone` [​ ](#body-group-one-of-0) group string | null Set to move the tag into a group (it inherits the group&#x27;s color, overriding ` color `), or ` null ` to remove it from its group. Omit to leave the group unchanged. Minimum string length: `1` Example : ` "persona" ` 

## Response

 200 application/json Tag updated successfully Tag updated successfully [ Delete Tag ](/api-reference/project/delete-tag)[ List Tag Groups ](/api-reference/project/list-tag-groups) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/update-tag-group

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/update-tag-group#webpage","url":"https://docs.peec.ai/api-reference/project/update-tag-group","name":"Update Tag Group","description":"Rename and/or recolor a user-defined tag group. Applies to every tag in the group. System groups (branding/intentType) cannot be modified.","dateModified":"2026-07-17T08:39:39.461Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/update-tag-group#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/update-tag-group#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Update Tag Group","item":"https://docs.peec.ai/api-reference/project/update-tag-group"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/update-tag-group#apireference","headline":"Update Tag Group","name":"Update Tag Group","description":"Rename and/or recolor a user-defined tag group. Applies to every tag in the group. System groups (branding/intentType) cannot be modified.","url":"https://docs.peec.ai/api-reference/project/update-tag-group","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/update-tag-group#webpage"},"dateModified":"2026-07-17T08:39:39.461Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Update Tag Group cURL 
```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/tag-groups/{group} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "audience", 
 "color": "green" 
 } 
 ' 
```

```
 { 
 "tag_count" : 123 
 } 
```

```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/tag-groups/{group} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "audience", 
 "color": "green" 
 } 
 ' 
```

```
 { 
 "tag_count" : 123 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-group) group string required The current group name (URL-encoded) Example : ` "persona" ` 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string New group name to rename the group to Minimum string length: `1` Example : ` "audience" ` [​ ](#body-color) color enum&lt;string&gt; New color applied to every tag in the group Available options : `gray`, `red`, `orange`, `yellow`, `lime`, `green`, `cyan`, `blue`, `purple`, `fuchsia`, `pink`, `emerald`, `amber`, `violet`, `indigo`, `teal`, `sky`, `rose`, `slate`, `zinc`, `neutral`, `stone` Example : ` "green" ` 

## Response

 200 application/json Group updated successfully Group updated successfully [​ ](#response-tag-count) tag_count number required [ Delete Tag Group ](/api-reference/project/delete-tag-group)[ List Topics ](/api-reference/project/list-topics) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/project/update-topic

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/project/update-topic#webpage","url":"https://docs.peec.ai/api-reference/project/update-topic","name":"Update Topic","description":"Update a topic within a project","dateModified":"2026-07-17T08:39:39.530Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/project/update-topic#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/project/update-topic#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Project","item":"https://docs.peec.ai/api-reference/project/list-fanout-search-queries"},{"@type":"ListItem","position":3,"name":"Update Topic","item":"https://docs.peec.ai/api-reference/project/update-topic"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/project/update-topic#apireference","headline":"Update Topic","name":"Update Topic","description":"Update a topic within a project","url":"https://docs.peec.ai/api-reference/project/update-topic","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/project/update-topic#webpage"},"dateModified":"2026-07-17T08:39:39.530Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Update Topic cURL 
```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/topics/{topic_id} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>" 
 } 
 ' 
```

```
 curl --request PATCH \ 
 --url https://api.peec.ai/customer/v1/topics/{topic_id} \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "name": "&#x3C;string>" 
 } 
 ' 
```
 ` import requests url = "https://api.peec.ai/customer/v1/topics/ {topic_id} " payload = { "name" : "&#x3C;string>" } headers = { "X-API-Key" : "&#x3C;api-key>" , "Content-Type" : "application/json" } response = requests.patch(url, json = payload, headers = headers) print (response.text) ` ` const options = { method: 'PATCH' , headers: { 'X-API-Key' : '&#x3C;api-key>' , 'Content-Type' : 'application/json' }, body: JSON . stringify ({ name: '&#x3C;string>' }) }; fetch ( 'https://api.peec.ai/customer/v1/topics/{topic_id}' , options ) . then ( res => res . json ()) . then ( res => console . log ( res )) . catch ( err => console . error ( err )); ` ` &#x3C;? php $curl = curl_init (); curl_setopt_array ( $curl , [ CURLOPT_URL => "https://api.peec.ai/customer/v1/topics/{topic_id}" , CURLOPT_RETURNTRANSFER => true , CURLOPT_ENCODING => "" , CURLOPT_MAXREDIRS => 10 , CURLOPT_TIMEOUT => 30 , CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 , CURLOPT_CUSTOMREQUEST => "PATCH" , CURLOPT_POSTFIELDS => json_encode ([ 'name' => '&#x3C;string>' ]), CURLOPT_HTTPHEADER => [ "Content-Type: application/json" , "X-API-Key: &#x3C;api-key>" ], ]); $response = curl_exec ( $curl ); $err = curl_error ( $curl ); curl_close ( $curl ); if ( $err ) { echo "cURL Error #:" . $err ; } else { echo $response ; } ` ` package main import ( 	" fmt " 	" strings " 	" net/http " 	" io " ) func main () { 	url := "https://api.peec.ai/customer/v1/topics/{topic_id}" 	payload := strings . NewReader ( "{ \n \" name \" : \" &#x3C;string> \"\n }" ) 	req , _ := http . NewRequest ( "PATCH" , url , payload ) 	req . Header . Add ( "X-API-Key" , "&#x3C;api-key>" ) 	req . Header . Add ( "Content-Type" , "application/json" ) 	res , _ := http . DefaultClient . Do ( req ) 	defer res . Body . Close () 	body , _ := io . ReadAll ( res . Body ) 	fmt . Println ( string ( body )) } ` ` HttpResponse &#x3C; String > response = Unirest . patch ( "https://api.peec.ai/customer/v1/topics/{topic_id}" ) . header ( "X-API-Key" , "&#x3C;api-key>" ) . header ( "Content-Type" , "application/json" ) . body ( "{ \n \" name \" : \" &#x3C;string> \"\n }" ) . asString (); ` ` require 'uri' require 'net/http' url = URI ( "https://api.peec.ai/customer/v1/topics/{topic_id}" ) http = Net :: HTTP . new (url. host , url. port ) http. use_ssl = true request = Net :: HTTP :: Patch . new (url) request[ "X-API-Key" ] = '&#x3C;api-key>' request[ "Content-Type" ] = 'application/json' request. body = "{ \n \" name \" : \" &#x3C;string> \"\n }" response = http. request (request) puts response. read_body ` 200 404 409 ` {} ` ` { "message" : "&#x3C;string>" } ` ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Path Parameters

 [​ ](#parameter-topic-id) topic_id string required 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-name) name string Required string length: `1 - 64` 

## Response

 200 application/json Topic updated successfully Topic updated successfully [ Delete Topic ](/api-reference/project/delete-topic)[ List Models ](/api-reference/project/list-models) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/reports/get-brands-report

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/reports/get-brands-report#webpage","url":"https://docs.peec.ai/api-reference/reports/get-brands-report","name":"Get Brands Report","description":"Get a report on Brands. ## Aggregation Formulas When aggregating results across multiple rows/dimensions, use the following formulas: - sentiment: ((sum(sentiment_sum) / sum(sentiment_count)) / 2 + 0.5) * 100 - position: sum(position_sum) / sum(position_count) - visibility: sum(visibility_count) / sum(visibility_total) - share_of_voice: mention_count / sum(mention_count) ## filters vs having filters are pre-aggregation row filters (applied as WHERE before GROUP BY). They shrink both the numerator and the denominator of ratio metrics. Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, brand_id. Note that brand_id in filters shrinks share_of_voice's denominator too — so filtering to one brand collapses SoV to 1.0. Use having for brand_id if you want SoV preserved. having are post-aggregation row filters (applied as HAVING after GROUP BY). They select which aggregated rows are returned and do not shrink ratio-metric denominators. Filtering {field: \"brand_id\", values: [X]} here returns only brand X's row, but share_of_voice still divides X's mentions by mentions across all in-scope brands — so SoV stays in [0, 1]. Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, brand_id. Population fields (model_id etc.) are also allowed in having but require the matching value in dimensions so the column appears in GROUP BY; otherwise the request is rejected. When dimensions are requested, the share_of_voice denominator follows the same grouping as the numerator. Requesting prompt_id as a dimension produces per-(brand × prompt) rows whose share_of_voice is the brand's mentions in that prompt divided by all brands' mentions in that prompt.","dateModified":"2026-07-17T08:39:38.988Z","isPartOf":{"@id":"https://docs.peec.ai#website"}},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/reports/get-brands-report#apireference","headline":"Get Brands Report","name":"Get Brands Report","description":"Get a report on Brands. ## Aggregation Formulas When aggregating results across multiple rows/dimensions, use the following formulas: - sentiment: ((sum(sentiment_sum) / sum(sentiment_count)) / 2 + 0.5) * 100 - position: sum(position_sum) / sum(position_count) - visibility: sum(visibility_count) / sum(visibility_total) - share_of_voice: mention_count / sum(mention_count) ## filters vs having filters are pre-aggregation row filters (applied as WHERE before GROUP BY). They shrink both the numerator and the denominator of ratio metrics. Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, brand_id. Note that brand_id in filters shrinks share_of_voice's denominator too — so filtering to one brand collapses SoV to 1.0. Use having for brand_id if you want SoV preserved. having are post-aggregation row filters (applied as HAVING after GROUP BY). They select which aggregated rows are returned and do not shrink ratio-metric denominators. Filtering {field: \"brand_id\", values: [X]} here returns only brand X's row, but share_of_voice still divides X's mentions by mentions across all in-scope brands — so SoV stays in [0, 1]. Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, brand_id. Population fields (model_id etc.) are also allowed in having but require the matching value in dimensions so the column appears in GROUP BY; otherwise the request is rejected. When dimensions are requested, the share_of_voice denominator follows the same grouping as the numerator. Requesting prompt_id as a dimension produces per-(brand × prompt) rows whose share_of_voice is the brand's mentions in that prompt divided by all brands' mentions in that prompt.","url":"https://docs.peec.ai/api-reference/reports/get-brands-report","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/reports/get-brands-report#webpage"},"dateModified":"2026-07-17T08:39:38.988Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get Brands Report cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/reports/brands \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "dimensions": [ 
 "tag_id", 
 "model_id" 
 ], 
 "filters": [ 
 { 
 "field": "model_id", 
 "operator": "in", 
 "values": [ 
 "gpt-4o-search" 
 ] 
 } 
 ], 
 "having": [ 
 { 
 "field": "brand_id", 
 "operator": "in", 
 "values": [ 
 "kw_abc123" 
 ] 
 } 
 ], 
 "order_by": [ 
 { 
 "field": "visibility", 
 "direction": "desc" 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "brand" : { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" , 
 "name" : "Peec AI" 
 }, 
 "mention_count" : 42 , 
 "visibility" : 0.5 , 
 "visibility_count" : 5 , 
 "visibility_total" : 10 , 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "tag" : { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 }, 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "country_code" : "US" , 
 "chat" : { 
 "id" : "ch_abc123" 
 }, 
 "date" : "2025-03-15" , 
 "week" : "2025-03-10" , 
 "month" : "2025-03-01" , 
 "share_of_voice" : 0.15 , 
 "sentiment" : 50 , 
 "sentiment_sum" : 0 , 
 "sentiment_count" : 10 , 
 "position" : 1.5 , 
 "position_sum" : 15 , 
 "position_count" : 10 
 } 
 ] 
 } 
```
 Reports 

# Get Brands Report

 Get a report on Brands. 

# Aggregation Formulas

 When aggregating results across multiple rows/dimensions, use the following formulas: 

 sentiment : `((sum(sentiment_sum) / sum(sentiment_count)) / 2 + 0.5) * 100` 
 position : `sum(position_sum) / sum(position_count)` 
 visibility : `sum(visibility_count) / sum(visibility_total)` 
 share_of_voice : `mention_count / sum(mention_count)` 

# `filters` vs `having`

 `filters` are pre-aggregation row filters (applied as WHERE before GROUP BY). They shrink both the numerator and the denominator of ratio metrics. Allowed fields: `model_id` (deprecated), `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`, `brand_id`. Note that `brand_id` in `filters` shrinks `share_of_voice`’s denominator too — so filtering to one brand collapses SoV to 1.0. Use `having` for `brand_id` if you want SoV preserved. 
 `having` are post-aggregation row filters (applied as HAVING after GROUP BY). They select which aggregated rows are returned and do not shrink ratio-metric denominators. Filtering `{field: &quot;brand_id&quot;, values: [X]}` here returns only brand X’s row, but `share_of_voice` still divides X’s mentions by mentions across all in-scope brands — so SoV stays in [0, 1]. Allowed fields: `model_id` (deprecated), `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`, `brand_id`. 
 Population fields (`model_id` etc.) are also allowed in `having` but require the matching value in `dimensions` so the column appears in GROUP BY; otherwise the request is rejected. 
 When `dimensions` are requested, the `share_of_voice` denominator follows the same grouping as the numerator. Requesting `prompt_id` as a dimension produces per-(brand × prompt) rows whose `share_of_voice` is the brand’s mentions in that prompt divided by all brands’ mentions in that prompt. POST / reports / brands Try it Get Brands Report cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/reports/brands \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "dimensions": [ 
 "tag_id", 
 "model_id" 
 ], 
 "filters": [ 
 { 
 "field": "model_id", 
 "operator": "in", 
 "values": [ 
 "gpt-4o-search" 
 ] 
 } 
 ], 
 "having": [ 
 { 
 "field": "brand_id", 
 "operator": "in", 
 "values": [ 
 "kw_abc123" 
 ] 
 } 
 ], 
 "order_by": [ 
 { 
 "field": "visibility", 
 "direction": "desc" 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "brand" : { 
 "id" : "kw_915e742b-396d-4a86-ad57-8bc84e8c2232" , 
 "name" : "Peec AI" 
 }, 
 "mention_count" : 42 , 
 "visibility" : 0.5 , 
 "visibility_count" : 5 , 
 "visibility_total" : 10 , 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "tag" : { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 }, 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "country_code" : "US" , 
 "chat" : { 
 "id" : "ch_abc123" 
 }, 
 "date" : "2025-03-15" , 
 "week" : "2025-03-10" , 
 "month" : "2025-03-01" , 
 "share_of_voice" : 0.15 , 
 "sentiment" : 50 , 
 "sentiment_sum" : 0 , 
 "sentiment_count" : 10 , 
 "position" : 1.5 , 
 "position_sum" : 15 , 
 "position_count" : 10 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#body-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-dimensions) dimensions enum&lt;string&gt;[] Dimensions to break down the report by. Available options : `prompt_id`, `model_id`, `model_channel_id`, `tag_id`, `topic_id`, `date`, `week`, `month`, `country_code`, `chat_id` Example : ` [ "tag_id" , "model_id" ] ` [​ ](#body-filters) filters object[] Pre-aggregation row filters (applied as WHERE before grouping). Shrinks both the numerator and the denominator of ratio metrics. Allowed fields: ` model_id ` (deprecated), ` model_channel_id `, ` country_code `, ` prompt_id `, ` tag_id `, ` topic_id `, ` chat_id `, ` brand_id `. Filtering by ` brand_id ` here also shrinks ` share_of_voice `&#x27;s denominator — so SoV collapses to 1.0 when scoping to a single brand. If you want SoV preserved (X&#x27;s share against all in-scope brands), put ` brand_id ` in ` having ` instead. Multiple filters are AND&#x27;d. Deprecated: use model_channel_id filter instead Option 1 Option 2 Option 3 Option 4 Option 5 Option 6 Option 7 Option 8 Show child attributes Example : ` [ { "field" : "model_id" , "operator" : "in" , "values" : [ "gpt-4o-search" ] } ] ` [​ ](#body-having) having object[] Post-aggregation row filters (applied as HAVING after grouping). Allowed fields: ` model_id ` (deprecated), ` model_channel_id `, ` country_code `, ` prompt_id `, ` tag_id `, ` topic_id `, ` chat_id `, ` brand_id ` — population fields require the matching value in ` dimensions ` so the column appears in GROUP BY. Selects which aggregated rows are returned without shrinking ratio-metric denominators. Multiple filters are AND&#x27;d together. Deprecated: use model_channel_id filter instead Option 1 Option 2 Option 3 Option 4 Option 5 Option 6 Option 7 Option 8 Show child attributes Example : ` [ { "field" : "brand_id" , "operator" : "in" , "values" : [ "kw_abc123" ] } ] ` [​ ](#body-order-by) order_by object[] Sort results by one or more fields. Multiple entries create a multi-key sort. Direction defaults to desc. When omitted, a default ordering is applied. Show child attributes Example : ` [ { "field" : "visibility" , "direction" : "desc" } ] ` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ Changelog ](/api/changelog)[ Get Domains Report ](/api-reference/reports/get-domains-report) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/reports/get-domains-report

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/reports/get-domains-report#webpage","url":"https://docs.peec.ai/api-reference/reports/get-domains-report","name":"Get Domains Report","description":"Get a report on Source Domains. ## Aggregation Formulas When aggregating results across multiple rows/dimensions, use the following formulas: - citation_rate: sum(citation_count) / sum(retrieval_count) - retrieval_rate: sum(retrieval_count) / sum(total_chat_count) - retrieval_percentage: sum(retrieved_chat_count) / sum(total_chat_count) ## filters vs having filters are pre-aggregation row filters (applied as WHERE before GROUP BY) on the source-row table. Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, domain, domain_classification, url, url_classification, mentioned_brand_id, mentioned_brand_count, gap. - Population (model_id, model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id) shrink both numerator and denominator (total_chat_count). - Source-side (domain, domain_classification, url, url_classification) and per-row mentioned-brand predicates (mentioned_brand_id, mentioned_brand_count, gap) shrink the source-row scope feeding aggregation. total_chat_count is computed from a chat-level table that doesn't carry these columns, so the denominator narrows only on chat-level fields. having are post-aggregation row filters (applied as HAVING after GROUP BY). Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, domain, domain_classification, mentioned_brand_id, mentioned_brand_count, gap. They select which aggregated rows are returned and do not affect denominators.","dateModified":"2026-07-17T08:39:38.999Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/reports/get-domains-report#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/reports/get-domains-report#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Reports","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":3,"name":"Get Domains Report","item":"https://docs.peec.ai/api-reference/reports/get-domains-report"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/reports/get-domains-report#apireference","headline":"Get Domains Report","name":"Get Domains Report","description":"Get a report on Source Domains. ## Aggregation Formulas When aggregating results across multiple rows/dimensions, use the following formulas: - citation_rate: sum(citation_count) / sum(retrieval_count) - retrieval_rate: sum(retrieval_count) / sum(total_chat_count) - retrieval_percentage: sum(retrieved_chat_count) / sum(total_chat_count) ## filters vs having filters are pre-aggregation row filters (applied as WHERE before GROUP BY) on the source-row table. Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, domain, domain_classification, url, url_classification, mentioned_brand_id, mentioned_brand_count, gap. - Population (model_id, model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id) shrink both numerator and denominator (total_chat_count). - Source-side (domain, domain_classification, url, url_classification) and per-row mentioned-brand predicates (mentioned_brand_id, mentioned_brand_count, gap) shrink the source-row scope feeding aggregation. total_chat_count is computed from a chat-level table that doesn't carry these columns, so the denominator narrows only on chat-level fields. having are post-aggregation row filters (applied as HAVING after GROUP BY). Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, domain, domain_classification, mentioned_brand_id, mentioned_brand_count, gap. They select which aggregated rows are returned and do not affect denominators.","url":"https://docs.peec.ai/api-reference/reports/get-domains-report","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/reports/get-domains-report#webpage"},"dateModified":"2026-07-17T08:39:38.999Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get Domains Report cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/reports/domains \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "dimensions": [ 
 "tag_id", 
 "model_id" 
 ], 
 "filters": [ 
 { 
 "field": "model_id", 
 "operator": "in", 
 "values": [ 
 "gpt-4o-search" 
 ] 
 } 
 ], 
 "having": [ 
 { 
 "field": "domain", 
 "operator": "in", 
 "values": [ 
 "example.com" 
 ] 
 } 
 ], 
 "order_by": [ 
 { 
 "field": "citation_rate", 
 "direction": "desc" 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "domain" : "example.com" , 
 "classification" : "UGC" , 
 "usage_rate" : 0.8 , 
 "citation_avg" : 2.5 , 
 "retrieved_percentage" : 0.6 , 
 "retrieval_rate" : 1.2 , 
 "citation_rate" : 1.5 , 
 "retrieval_count" : 24 , 
 "citation_count" : 12 , 
 "retrieved_chat_count" : 18 , 
 "total_chat_count" : 30 , 
 "mentioned_brands" : [ 
 { 
 "id" : "&#x3C;string>" 
 } 
 ], 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "tag" : { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 }, 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "country_code" : "US" , 
 "chat" : { 
 "id" : "ch_abc123" 
 }, 
 "date" : "&#x3C;string>" , 
 "week" : "2025-03-10" , 
 "month" : "2025-03-01" 
 } 
 ] 
 } 
```
 Reports 

# Get Domains Report

 Get a report on Source Domains. 

# Aggregation Formulas

 When aggregating results across multiple rows/dimensions, use the following formulas: 

 citation_rate : `sum(citation_count) / sum(retrieval_count)` 
 retrieval_rate : `sum(retrieval_count) / sum(total_chat_count)` 
 retrieval_percentage : `sum(retrieved_chat_count) / sum(total_chat_count)` 

# `filters` vs `having`

 `filters` are pre-aggregation row filters (applied as WHERE before GROUP BY) on the source-row table. Allowed fields: `model_id` (deprecated), `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`, `domain`, `domain_classification`, `url`, `url_classification`, `mentioned_brand_id`, `mentioned_brand_count`, `gap`. 

 Population (`model_id`, `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`) shrink both numerator and denominator (`total_chat_count`). 
 Source-side (`domain`, `domain_classification`, `url`, `url_classification`) and per-row mentioned-brand predicates (`mentioned_brand_id`, `mentioned_brand_count`, `gap`) shrink the source-row scope feeding aggregation. `total_chat_count` is computed from a chat-level table that doesn’t carry these columns, so the denominator narrows only on chat-level fields. 

 `having` are post-aggregation row filters (applied as HAVING after GROUP BY). Allowed fields: `model_id` (deprecated), `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`, `domain`, `domain_classification`, `mentioned_brand_id`, `mentioned_brand_count`, `gap`. They select which aggregated rows are returned and do not affect denominators. POST / reports / domains Try it Get Domains Report cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/reports/domains \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "dimensions": [ 
 "tag_id", 
 "model_id" 
 ], 
 "filters": [ 
 { 
 "field": "model_id", 
 "operator": "in", 
 "values": [ 
 "gpt-4o-search" 
 ] 
 } 
 ], 
 "having": [ 
 { 
 "field": "domain", 
 "operator": "in", 
 "values": [ 
 "example.com" 
 ] 
 } 
 ], 
 "order_by": [ 
 { 
 "field": "citation_rate", 
 "direction": "desc" 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "domain" : "example.com" , 
 "classification" : "UGC" , 
 "usage_rate" : 0.8 , 
 "citation_avg" : 2.5 , 
 "retrieved_percentage" : 0.6 , 
 "retrieval_rate" : 1.2 , 
 "citation_rate" : 1.5 , 
 "retrieval_count" : 24 , 
 "citation_count" : 12 , 
 "retrieved_chat_count" : 18 , 
 "total_chat_count" : 30 , 
 "mentioned_brands" : [ 
 { 
 "id" : "&#x3C;string>" 
 } 
 ], 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "tag" : { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 }, 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "country_code" : "US" , 
 "chat" : { 
 "id" : "ch_abc123" 
 }, 
 "date" : "&#x3C;string>" , 
 "week" : "2025-03-10" , 
 "month" : "2025-03-01" 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#body-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-dimensions) dimensions enum&lt;string&gt;[] Dimensions to break down the report by. Available options : `prompt_id`, `model_id`, `model_channel_id`, `tag_id`, `topic_id`, `date`, `week`, `month`, `country_code`, `chat_id` Example : ` [ "tag_id" , "model_id" ] ` [​ ](#body-filters) filters object[] Pre-aggregation row filters (applied as WHERE before grouping). Allowed fields: ` model_id ` (deprecated), ` model_channel_id `, ` country_code `, ` prompt_id `, ` tag_id `, ` topic_id `, ` chat_id `, ` domain `, ` domain_classification `, ` url `, ` url_classification `, ` mentioned_brand_id `, ` mentioned_brand_count `, ` gap `. Population fields (model/country/prompt/tag/topic/chat) shrink both numerator and denominator. Source-side fields and per-row mentioned-brand predicates shrink the source-row scope feeding aggregation; ` total_chat_count ` comes from a chat-level table that doesn&#x27;t carry these columns, so they narrow the numerator only. Multiple filters are AND&#x27;d. Deprecated: use model_channel_id filter instead Option 1 Option 2 Option 3 Option 4 Option 5 Option 6 Option 7 Option 8 Option 9 Option 10 Option 11 Option 12 Option 13 Option 14 Show child attributes Example : ` [ { "field" : "model_id" , "operator" : "in" , "values" : [ "gpt-4o-search" ] } ] ` [​ ](#body-having) having object[] Post-aggregation row filters (applied as HAVING after grouping). Select which aggregated domain rows are returned. Allowed fields: ` model_id ` (deprecated), ` model_channel_id `, ` country_code `, ` prompt_id `, ` tag_id `, ` topic_id `, ` chat_id `, ` domain `, ` domain_classification `, ` mentioned_brand_id `, ` mentioned_brand_count `, ` gap ` — population fields require the matching value in ` dimensions `. Multiple filters are AND&#x27;d. Deprecated: use model_channel_id filter instead Option 1 Option 2 Option 3 Option 4 Option 5 Option 6 Option 7 Option 8 Option 9 Option 10 Option 11 Option 12 Show child attributes Example : ` [ { "field" : "domain" , "operator" : "in" , "values" : [ "example.com" ] } ] ` [​ ](#body-order-by) order_by object[] Sort results by one or more fields. Multiple entries create a multi-key sort. Direction defaults to desc. When omitted, a default ordering is applied. Show child attributes Example : ` [ { "field" : "citation_rate" , "direction" : "desc" } ] ` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ Get Brands Report ](/api-reference/reports/get-brands-report)[ Get URLs Report ](/api-reference/reports/get-urls-report) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/reports/get-url-content

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/reports/get-url-content#webpage","url":"https://docs.peec.ai/api-reference/reports/get-url-content","name":"Get URL Content","description":"Return the scraped markdown content of a source URL. Use the URLs report to discover URLs.","dateModified":"2026-07-17T08:39:39.026Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/reports/get-url-content#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/reports/get-url-content#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Reports","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":3,"name":"Get URL Content","item":"https://docs.peec.ai/api-reference/reports/get-url-content"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/reports/get-url-content#apireference","headline":"Get URL Content","name":"Get URL Content","description":"Return the scraped markdown content of a source URL. Use the URLs report to discover URLs.","url":"https://docs.peec.ai/api-reference/reports/get-url-content","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/reports/get-url-content#webpage"},"dateModified":"2026-07-17T08:39:39.026Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get URL Content cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/sources/urls/content \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "url": "https://example.com/blog/page1", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "max_length": 100000 
 } 
 ' 
```

```
 { 
 "data" : { 
 "url" : "https://example.com/blog/page1" , 
 "title" : "&#x3C;string>" , 
 "domain" : "example.com" , 
 "channel_title" : "&#x3C;string>" , 
 "content" : "&#x3C;string>" , 
 "content_length" : 123 , 
 "truncated" : true , 
 "content_updated_at" : "&#x3C;string>" 
 } 
 } 
```

```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/sources/urls/content \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "url": "https://example.com/blog/page1", 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "max_length": 100000 
 } 
 ' 
```

```
 { 
 "data" : { 
 "url" : "https://example.com/blog/page1" , 
 "title" : "&#x3C;string>" , 
 "domain" : "example.com" , 
 "channel_title" : "&#x3C;string>" , 
 "content" : "&#x3C;string>" , 
 "content_length" : 123 , 
 "truncated" : true , 
 "content_updated_at" : "&#x3C;string>" 
 } 
 } 
```
 ` { "message" : "&#x3C;string>" } ` 

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-url) url string&lt;uri&gt; required Example : ` "https://example.com/blog/page1" ` [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-max-length) max_length integer default: 100000 Maximum number of characters of content to return. Defaults to 100,000. If the stored content is longer, the response will be truncated and truncated=true. Required range : `1 &lt;= x &lt;= 20000000` Example : ` 100000 ` 

## Response

 200 application/json Success Success [​ ](#response-data) data object required Show child attributes [ Get URLs Report ](/api-reference/reports/get-urls-report)[ List Fanout Search Queries ](/api-reference/project/list-fanout-search-queries) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api-reference/reports/get-urls-report

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api-reference/reports/get-urls-report#webpage","url":"https://docs.peec.ai/api-reference/reports/get-urls-report","name":"Get URLs Report","description":"Get a report on Source URLs. ## Aggregation Formulas When aggregating results across multiple rows/dimensions, use the following formula: - citation_rate: sum(citation_count) / sum(retrieval_count) ## filters vs having filters are pre-aggregation row filters (applied as WHERE before GROUP BY) on the source-row table. Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, domain, domain_classification, url, url_classification, mentioned_brand_id, mentioned_brand_count, gap. - Population (model_id, model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id) shrink both numerator and denominator scope. - Source-side (domain, domain_classification, url, url_classification) and per-row mentioned-brand predicates (mentioned_brand_id, mentioned_brand_count, gap) shrink the source-row scope feeding aggregation. having are post-aggregation row filters (applied as HAVING after GROUP BY). Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, domain, domain_classification, url, url_classification, mentioned_brand_id, mentioned_brand_count, gap. citation_rate is computed per row from numerator (citation_count) and denominator (retrieval_count) inside the same aggregation group, so neither filter placement can collapse it. The shared fields exist in both filters and having — use filters to prune source rows before aggregation (typically more efficient), use having to operate on the aggregated mentioned_brands union for entity-wide selection.","dateModified":"2026-07-17T08:39:39.009Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api-reference/reports/get-urls-report#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api-reference/reports/get-urls-report#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Endpoints","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":2,"name":"Reports","item":"https://docs.peec.ai/api-reference/reports/get-brands-report"},{"@type":"ListItem","position":3,"name":"Get URLs Report","item":"https://docs.peec.ai/api-reference/reports/get-urls-report"}]},{"@type":["TechArticle","APIReference"],"@id":"https://docs.peec.ai/api-reference/reports/get-urls-report#apireference","headline":"Get URLs Report","name":"Get URLs Report","description":"Get a report on Source URLs. ## Aggregation Formulas When aggregating results across multiple rows/dimensions, use the following formula: - citation_rate: sum(citation_count) / sum(retrieval_count) ## filters vs having filters are pre-aggregation row filters (applied as WHERE before GROUP BY) on the source-row table. Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, domain, domain_classification, url, url_classification, mentioned_brand_id, mentioned_brand_count, gap. - Population (model_id, model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id) shrink both numerator and denominator scope. - Source-side (domain, domain_classification, url, url_classification) and per-row mentioned-brand predicates (mentioned_brand_id, mentioned_brand_count, gap) shrink the source-row scope feeding aggregation. having are post-aggregation row filters (applied as HAVING after GROUP BY). Allowed fields: model_id (deprecated), model_channel_id, country_code, prompt_id, tag_id, topic_id, chat_id, domain, domain_classification, url, url_classification, mentioned_brand_id, mentioned_brand_count, gap. citation_rate is computed per row from numerator (citation_count) and denominator (retrieval_count) inside the same aggregation group, so neither filter placement can collapse it. The shared fields exist in both filters and having — use filters to prune source rows before aggregation (typically more efficient), use having to operate on the aggregated mentioned_brands union for entity-wide selection.","url":"https://docs.peec.ai/api-reference/reports/get-urls-report","mainEntityOfPage":{"@id":"https://docs.peec.ai/api-reference/reports/get-urls-report#webpage"},"dateModified":"2026-07-17T08:39:39.009Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) Get URLs Report cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/reports/urls \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "dimensions": [ 
 "tag_id", 
 "model_id" 
 ], 
 "filters": [ 
 { 
 "field": "model_id", 
 "operator": "in", 
 "values": [ 
 "gpt-4o-search" 
 ] 
 } 
 ], 
 "having": [ 
 { 
 "field": "url", 
 "operator": "in", 
 "values": [ 
 "https://example.com/page" 
 ] 
 } 
 ], 
 "order_by": [ 
 { 
 "field": "retrieval_count", 
 "direction": "desc" 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "url" : "https://example.com/blog/page1#header" , 
 "classification" : "HOMEPAGE" , 
 "title" : "&#x3C;string>" , 
 "usage_count" : 8 , 
 "citation_count" : 4 , 
 "citation_avg" : 2.5 , 
 "retrievals" : 8 , 
 "retrieval_count" : 8 , 
 "citation_rate" : 0.5 , 
 "mentioned_brands" : [ 
 { 
 "id" : "&#x3C;string>" 
 } 
 ], 
 "channel_title" : "&#x3C;string>" , 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "tag" : { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 }, 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "country_code" : "US" , 
 "chat" : { 
 "id" : "ch_abc123" 
 }, 
 "date" : "&#x3C;string>" , 
 "week" : "2025-03-10" , 
 "month" : "2025-03-01" 
 } 
 ] 
 } 
```
 Reports 

# Get URLs Report

 Get a report on Source URLs. 

# Aggregation Formulas

 When aggregating results across multiple rows/dimensions, use the following formula: 

 citation_rate : `sum(citation_count) / sum(retrieval_count)` 

# `filters` vs `having`

 `filters` are pre-aggregation row filters (applied as WHERE before GROUP BY) on the source-row table. Allowed fields: `model_id` (deprecated), `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`, `domain`, `domain_classification`, `url`, `url_classification`, `mentioned_brand_id`, `mentioned_brand_count`, `gap`. 

 Population (`model_id`, `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`) shrink both numerator and denominator scope. 
 Source-side (`domain`, `domain_classification`, `url`, `url_classification`) and per-row mentioned-brand predicates (`mentioned_brand_id`, `mentioned_brand_count`, `gap`) shrink the source-row scope feeding aggregation. 

 `having` are post-aggregation row filters (applied as HAVING after GROUP BY). Allowed fields: `model_id` (deprecated), `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`, `domain`, `domain_classification`, `url`, `url_classification`, `mentioned_brand_id`, `mentioned_brand_count`, `gap`. 
 `citation_rate` is computed per row from numerator (`citation_count`) and denominator (`retrieval_count`) inside the same aggregation group, so neither filter placement can collapse it. The shared fields exist in both `filters` and `having` — use `filters` to prune source rows before aggregation (typically more efficient), use `having` to operate on the aggregated `mentioned_brands` union for entity-wide selection. POST / reports / urls Try it Get URLs Report cURL 
```
 curl --request POST \ 
 --url https://api.peec.ai/customer/v1/reports/urls \ 
 --header 'Content-Type: application/json' \ 
 --header 'X-API-Key: &#x3C;api-key>' \ 
 --data ' 
 { 
 "project_id": "or_f45b94ba-5e35-4982-93ed-285e72ee14eb", 
 "limit": 1000, 
 "offset": 0, 
 "start_date": "2025-09-22", 
 "end_date": "2025-09-22", 
 "dimensions": [ 
 "tag_id", 
 "model_id" 
 ], 
 "filters": [ 
 { 
 "field": "model_id", 
 "operator": "in", 
 "values": [ 
 "gpt-4o-search" 
 ] 
 } 
 ], 
 "having": [ 
 { 
 "field": "url", 
 "operator": "in", 
 "values": [ 
 "https://example.com/page" 
 ] 
 } 
 ], 
 "order_by": [ 
 { 
 "field": "retrieval_count", 
 "direction": "desc" 
 } 
 ] 
 } 
 ' 
```

```
 { 
 "data" : [ 
 { 
 "url" : "https://example.com/blog/page1#header" , 
 "classification" : "HOMEPAGE" , 
 "title" : "&#x3C;string>" , 
 "usage_count" : 8 , 
 "citation_count" : 4 , 
 "citation_avg" : 2.5 , 
 "retrievals" : 8 , 
 "retrieval_count" : 8 , 
 "citation_rate" : 0.5 , 
 "mentioned_brands" : [ 
 { 
 "id" : "&#x3C;string>" 
 } 
 ], 
 "channel_title" : "&#x3C;string>" , 
 "prompt" : { 
 "id" : "pr_93f790de-5b7a-45ee-b782-61103c81f20d" 
 }, 
 "model" : { 
 "id" : "gpt-4o-search" 
 }, 
 "model_channel" : { 
 "id" : "openai-1" 
 }, 
 "tag" : { 
 "id" : "tg_23abec5b-100a-4261-9ee7-1effe68f0149" 
 }, 
 "topic" : { 
 "id" : "to_e6b8cdd3-a51b-4d94-a866-28dbe6b830a6" 
 }, 
 "country_code" : "US" , 
 "chat" : { 
 "id" : "ch_abc123" 
 }, 
 "date" : "&#x3C;string>" , 
 "week" : "2025-03-10" , 
 "month" : "2025-03-01" 
 } 
 ] 
 } 
```

## Authorizations

 #opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_ij99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } APIKeyHeader APIKeyQuery BearerAuth APIKeyHeader APIKeyQuery BearerAuth [​ ](#authorization-x-api-key) X-API-Key string header required 

## Query Parameters

 [​ ](#parameter-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` 

## Body

 #opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="0"]:checked) ~ [data-idx="0"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="1"]:checked) ~ [data-idx="1"] { display: flex; }
#opt-dd-_R_in99f7av5tccsmisnpfiulb_:has(option[value="2"]:checked) ~ [data-idx="2"] { display: flex; } application/json application/x-www-form-urlencoded multipart/form-data application/json application/x-www-form-urlencoded multipart/form-data [​ ](#body-project-id) project_id string Required if using a company api key Example : ` "or_f45b94ba-5e35-4982-93ed-285e72ee14eb" ` [​ ](#body-limit) limit number default: 1000 Required range : `1 &lt;= x &lt;= 10000` [​ ](#body-offset) offset number default: 0 Required range : `x &gt;= 0` [​ ](#body-start-date) start_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-end-date) end_date string&lt;date&gt; default: 2026-01-01 full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21 Pattern: `^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$` Example : ` "2025-09-22" ` [​ ](#body-dimensions) dimensions enum&lt;string&gt;[] Dimensions to break down the report by. Available options : `prompt_id`, `model_id`, `model_channel_id`, `tag_id`, `topic_id`, `date`, `week`, `month`, `country_code`, `chat_id` Example : ` [ "tag_id" , "model_id" ] ` [​ ](#body-filters) filters object[] Pre-aggregation row filters (applied as WHERE before grouping). Restrict which raw source-rows feed into the per-URL aggregation. Allowed fields: ` model_id ` (deprecated), ` model_channel_id `, ` country_code `, ` prompt_id `, ` tag_id `, ` topic_id `, ` chat_id `, ` domain `, ` domain_classification `, ` url `, ` url_classification `, ` mentioned_brand_id `, ` mentioned_brand_count `, ` gap `. Multiple filters are AND&#x27;d. Deprecated: use model_channel_id filter instead Option 1 Option 2 Option 3 Option 4 Option 5 Option 6 Option 7 Option 8 Option 9 Option 10 Option 11 Option 12 Option 13 Option 14 Show child attributes Example : ` [ { "field" : "model_id" , "operator" : "in" , "values" : [ "gpt-4o-search" ] } ] ` [​ ](#body-having) having object[] Post-aggregation row filters (applied as HAVING after grouping). Select which aggregated URL rows are returned. Allowed fields: ` model_id ` (deprecated), ` model_channel_id `, ` country_code `, ` prompt_id `, ` tag_id `, ` topic_id `, ` chat_id `, ` domain `, ` domain_classification `, ` url `, ` url_classification `, ` mentioned_brand_id `, ` mentioned_brand_count `, ` gap ` — population fields require the matching value in ` dimensions `. Multiple filters are AND&#x27;d. Deprecated: use model_channel_id filter instead Option 1 Option 2 Option 3 Option 4 Option 5 Option 6 Option 7 Option 8 Option 9 Option 10 Option 11 Option 12 Option 13 Option 14 Show child attributes Example : ` [ { "field" : "url" , "operator" : "in" , "values" : [ "https://example.com/page" ] } ] ` [​ ](#body-order-by) order_by object[] Sort results by one or more fields. Multiple entries create a multi-key sort. Direction defaults to desc. When omitted, a default ordering is applied. Show child attributes Example : ` [ { "field" : "retrieval_count" , "direction" : "desc" } ] ` 

## Response

 200 - application/json Success Success [​ ](#response-data) data object[] required Show child attributes [ Get Domains Report ](/api-reference/reports/get-domains-report)[ Get URL Content ](/api-reference/reports/get-url-content) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api/authentication

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api/authentication#webpage","url":"https://docs.peec.ai/api/authentication","name":"Authentication for Peec API","dateModified":"2026-07-17T08:40:14.595Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api/authentication#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api/authentication#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Overview","item":"https://docs.peec.ai/api/introduction"},{"@type":"ListItem","position":2,"name":"Authentication for Peec API","item":"https://docs.peec.ai/api/authentication"}]},{"@type":["Article","TechArticle"],"@id":"https://docs.peec.ai/api/authentication#article","headline":"Authentication for Peec API","name":"Authentication for Peec API","url":"https://docs.peec.ai/api/authentication","mainEntityOfPage":{"@id":"https://docs.peec.ai/api/authentication#webpage"},"dateModified":"2026-07-17T08:40:14.595Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) 

# On this page 

 [Passing API Keys](#passing-api-keys) [1. HTTP Header](#1-http-header) [2. Query Parameter](#2-query-parameter) [API Key Scopes](#api-key-scopes) [Best Practices](#best-practices) Overview 

# Authentication for Peec API

 All requests to the Peec AI Customer API must be authenticated with a valid API key. API keys can be scoped at either the company or project level, depending on your use case. Create your API key [here](https://app.peec.ai/api-keys). 

# [​ ](#passing-api-keys) Passing API Keys 

 You can authenticate by providing your API key in one of two ways: 

## [​ ](#1-http-header) 1. HTTP Header 

```
 curl -X GET &quot;https://api.peec.ai/customer/v1/prompts&quot; \ 
 -H &quot;x-api-key: YOUR_API_KEY&quot; 

```

## [​ ](#2-query-parameter) 2. Query Parameter 

```
 curl -X GET &quot;https://api.peec.ai/customer/v1/prompts?api_key=YOUR_API_KEY&quot; 

```

 We recommend using the x-api-key header for better security. 

# [​ ](#api-key-scopes) API Key Scopes 

 API key scopes determine the level of access granted to the API. Choosing the appropriate scope helps ensure that your integrations have only the permissions they need. 

 Company-scoped keys – provide access across all projects within your organization. Use when building integrations that span multiple projects. 
 Project-scoped keys – limited to a single project. Use when isolating access for specific applications, environments, or teams. 

# [​ ](#best-practices) Best Practices 

 Keep your API keys secret and never expose them in client-side code. 
 Rotate keys regularly. 
 Use project-scoped keys where possible to limit risk. 
 [ Introduction ](/api/introduction)[ Rate Limits ](/api/ratelimits) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api/changelog

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api/changelog#webpage","url":"https://docs.peec.ai/api/changelog","name":"Changelog","description":"Track updates, improvements, and breaking changes to the Peec API.","dateModified":"2026-07-10T16:39:10.021Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api/changelog#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api/changelog#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Overview","item":"https://docs.peec.ai/api/introduction"},{"@type":"ListItem","position":2,"name":"Changelog","item":"https://docs.peec.ai/api/changelog"}]},{"@type":["Article","TechArticle"],"@id":"https://docs.peec.ai/api/changelog#article","headline":"Changelog","name":"Changelog","description":"Track updates, improvements, and breaking changes to the Peec API.","url":"https://docs.peec.ai/api/changelog","mainEntityOfPage":{"@id":"https://docs.peec.ai/api/changelog#webpage"},"dateModified":"2026-07-10T16:39:10.021Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) 

# On this page 

 [How to read this changelog](#how-to-read-this-changelog) [Changelog Categories](#changelog-categories) [Changelog](#changelog) [July 10, 2026](#july-10-2026) [June 27, 2026](#june-27-2026) [June 26, 2026](#june-26-2026) [June 25, 2026](#june-25-2026) [June 16, 2026](#june-16-2026) [June 15, 2026](#june-15-2026) [June 10, 2026](#june-10-2026) [June 8, 2026](#june-8-2026) [May 27, 2026](#may-27-2026) [May 22, 2026](#may-22-2026) [May 21, 2026](#may-21-2026) [April 28, 2026](#april-28-2026) [April 28, 2026](#april-28-2026-2) [April 27, 2026](#april-27-2026) [April 23, 2026](#april-23-2026) [April 22, 2026](#april-22-2026) [April 21, 2026](#april-21-2026) [April 15, 2026](#april-15-2026) [April 14, 2026](#april-14-2026) [April 02, 2026](#april-02-2026) [March 31, 2026](#march-31-2026) [March 27, 2026](#march-27-2026) [March 26, 2026](#march-26-2026) [March 23, 2026](#march-23-2026) [March 19, 2026](#march-19-2026) [March 18, 2026](#march-18-2026) [March 13, 2026](#march-13-2026) [March 6, 2026](#march-6-2026) [March 4, 2026](#march-4-2026) [February 20, 2026](#february-20-2026) [February 19, 2026](#february-19-2026) [January 27, 2026](#january-27-2026) [January 14, 2026](#january-14-2026) [January 13, 2026](#january-13-2026) [December 22, 2025](#december-22-2025) [December 01, 2025](#december-01-2025) [October 09, 2025](#october-09-2025) Overview 

# Changelog

 Track updates, improvements, and breaking changes to the Peec API. 

# [​ ](#how-to-read-this-changelog) How to read this changelog 

 This changelog documents all updates, improvements, and fixes to the Peec Customer API. 
 The API is currently in v0 (beta). During this phase, features and endpoints are subject to change, and breaking changes may occur. Once the API reaches v1, breaking changes will be minimized. 

## [​ ](#changelog-categories) Changelog Categories 

 Breaking Changes: API changes that may require updates to your integration. 
 Added: New features or capabilities. 
 Changed: Updates to existing functionality that aren’t breaking. 
 Deprecated: Features still available but planned for removal. 
 Removed: Features removed from the API. 
 Fixed: Bug fixes and corrections. 
 Security: Updates addressing vulnerabilities or improving security. 

# [​ ](#changelog) Changelog 

 [​ ](#july-10-2026) July 10, 2026 v0.33.0 

## [​ ](#added) Added 

 Tag group management Tags can now belong to a user-defined group, and tags in a group share a color. 

 [Create Tag](/api-reference/project/create-tag) and [Update Tag](/api-reference/project/update-tag) accept an optional `group` field. Setting a group moves the tag into it (inheriting the group’s color, so `color` is ignored); passing `null` on Update Tag removes the tag from its group. 
 [List Tags](/api-reference/project/list-tags) now returns the user-defined `group` for user tags (previously only system tags carried a `group`) and accepts a `group` query parameter to filter by group. 
 New [List Tag Groups](/api-reference/project/list-tag-groups) endpoint returns each user-defined group with its shared color and tag count. 
 New [Update Tag Group](/api-reference/project/update-tag-group) endpoint renames and/or recolors every tag in a group. 
 New [Delete Tag Group](/api-reference/project/delete-tag-group) endpoint ungroups a group’s tags by default, or deletes them with `delete_tags: true`. 

 [​ ](#june-27-2026) June 27, 2026 v0.32.0 

## [​ ](#added-2) Added 

 Archive and Unarchive Prompt endpoints New [Archive Prompt](/api-reference/project/archive-prompt) and [Unarchive Prompt](/api-reference/project/unarchive-prompt) endpoints for pausing and resuming tracking of a prompt without deleting it. Archived prompts are excluded from [List Chats](/api-reference/project/list-chats) by default — pass `include_archived_prompts=true` to include their historical chats. Unarchiving is subject to your plan’s active-prompt limit. 

 [​ ](#june-26-2026) June 26, 2026 v0.31.0 

## [​ ](#added-3) Added 

 `is_system` and `group` on List Tags The [List Tags](/api-reference/project/list-tags) endpoint now returns `is_system` — whether the tag is a system tag maintained by Peec and auto-assigned to every prompt by its classification — and `group`, the system tag group the tag belongs to: `branding` (the branded / non-branded distinction) or `intentType` (the informational / commercial / transactional distinction). `group` is `null` for user-created tags. 

 [​ ](#june-25-2026) June 25, 2026 v0.30.0 

## [​ ](#added-4) Added 

 Products endpoints A new group of Products endpoints exposes Peec’s shopping data. 

 [List Products](/api-reference/products/list-products): a project’s products with headline metrics (`mention_count`, `win_count`, `avg_position`, `visibility`, `share_of_voice`) over a date range, filterable by `product_ids`, `brand_ids`, `category_ids`, `merchant_ids`, `country_codes`, `model_channel_ids`, `topic_ids`, `tag_ids`, `source`, and `search`, with `order_by` (`visibility`, `win_rate`, `avg_position`, `mention_count`, `name`) and pagination. 
 [Get Product](/api-reference/products/get-product): detailed metrics for a single product over a date range, including period-over-period deltas, AI-quoted price ranges, and win rate. 
 [Create Products](/api-reference/products/create-products), [Update Products](/api-reference/products/update-products), and [Delete Products](/api-reference/products/delete-products): batch endpoints (up to 1,000 items per request) for managing products. Each returns per-item results, separating succeeded items from rejected ones with a reason. 
 [Get Shopping Attributes](/api-reference/products/get-shopping-attributes): a comparison grid of AI-extracted product attributes (`characteristics`, `facts`, `dimensions`) for a single product or the whole catalog, compared across brands or products. 

 Category management endpoints New [List Categories](/api-reference/products/list-categories), [Create Categories](/api-reference/products/create-categories), [Update Categories](/api-reference/products/update-categories), and [Delete Categories](/api-reference/products/delete-categories) endpoints for organizing products into a category tree. Create, update, and delete are batch endpoints returning per-item results with a rejection reason where applicable. 
 List Global Brands endpoint New [List Global Brands](/api-reference/products/list-global-brands) endpoint for searching Peec’s global brand catalog by name or alias. Pass the optional `ownership` parameter (`own`, `competitor`, or `all`) to instead list the project’s own shopping brands ranked by mention count; in that mode each result also includes `mention_count` and `is_own`. 
 `chat_scope` on Product endpoints [List Products](/api-reference/products/list-products) and [Get Product](/api-reference/products/get-product) accept an optional `chat_scope` parameter controlling the visibility denominator: `all` counts every in-scope chat, `shopping` counts only product-gallery chats. Defaults to `shopping`. 

 [​ ](#june-16-2026) June 16, 2026 v0.29.0 

## [​ ](#added-5) Added 

 `created_at` and creation-date filtering on Get Projects The [Get Projects](/api-reference/company/get-projects) endpoint now returns a `created_at` field (RFC 3339 full-date, e.g. `2025-09-22`) for each project, and accepts optional `start_date` and `end_date` query parameters to filter projects by their creation date. Both bounds are inclusive and interpreted in UTC. 

 [​ ](#june-15-2026) June 15, 2026 v0.28.0 

## [​ ](#added-6) Added 

 snake_case field-name corrections A handful of response fields were inadvertently camelCase, inconsistent with the API’s snake_case convention. Their snake_case equivalents have been added; the camelCase versions are now deprecated (see below). Existing integrations keep working until the camelCase fields are removed. 

 [Get Chat](/api-reference/project/get-chat): each source now includes `url_normalized`, `citation_count`, and `citation_position`; each ad includes `brand_name`, `ad_unit_type`, and `ads_request_id`; each ad card includes `image_url` and `target_url`. 
 `total_count` on list endpoints The [List Brands](/api-reference/project/list-brands), [List Chats](/api-reference/project/list-chats), [List Prompts](/api-reference/project/list-prompts), [List Tags](/api-reference/project/list-tags), [List Topics](/api-reference/project/list-topics), [List Fanout Search Queries](/api-reference/project/list-fanout-search-queries), and [List Fanout Shopping Queries](/api-reference/project/list-fanout-shopping-queries) endpoints now return a `total_count` field. 
 [Get Project Profile](/api-reference/project/get-project-profile): now returns `brand_presentation`, `products_and_services`, `target_markets` (each with `market_size` and `osm_id`), `audience_distribution` (with `simple_recommendation_seeker`, `informed_shopper`, and `evaluative_researcher`), and `used_prepared_profile`. 

## [​ ](#changed) Changed 

 [Set Project Profile](/api-reference/project/set-project-profile) accepts snake_case The request body now also accepts snake_case field names (`brand_presentation`, `products_and_services`, `target_markets[].market_size` / `osm_id`, `audience_distribution.simple_recommendation_seeker` / `informed_shopper` / `evaluative_researcher`), matching the rest of the API. The camelCase field names are still accepted for backward compatibility. 

## [​ ](#deprecated) Deprecated 

 camelCase field names The camelCase equivalents of the fields above are deprecated and will be removed in a future version. Migrate to snake_case: 

 Get Chat sources: `urlNormalized` → `url_normalized`, `citationCount` → `citation_count`, `citationPosition` → `citation_position`. 
 Get Chat ads: `brandName` → `brand_name`, `adUnitType` → `ad_unit_type`, `adsRequestId` → `ads_request_id`, `imageUrl` → `image_url`, `targetUrl` → `target_url`. 
 List endpoints: `totalCount` → `total_count`. 
 Project Profile: `brandPresentation` → `brand_presentation`, `productsAndServices` → `products_and_services`, `targetMarkets` → `target_markets`, `marketSize` → `market_size`, `osmId` → `osm_id`, `audienceDistribution` → `audience_distribution`, `simpleRecommendationSeeker` → `simple_recommendation_seeker`, `informedShopper` → `informed_shopper`, `evaluativeResearcher` → `evaluative_researcher`, `usedPreparedProfile` → `used_prepared_profile`. 

 [​ ](#june-10-2026) June 10, 2026 v0.27.0 

## [​ ](#added-7) Added 

 `week` and `month` dimensions on Report Endpoints The [Get Brands Report](/api-reference/reports/get-brands-report), [Get Domains Report](/api-reference/reports/get-domains-report), and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints now accept `week` and `month` in the `dimensions` array, aggregating results into weekly or monthly time buckets instead of the daily breakdown provided by `date`. Results broken down by `week` include a `week` field containing the Monday that starts the ISO week; results broken down by `month` include a `month` field containing the first day of the month. 

 [​ ](#june-8-2026) June 8, 2026 v0.26.0 

## [​ ](#added-8) Added 

 `having` filter on Report Endpoints The [Get Brands Report](/api-reference/reports/get-brands-report), [Get Domains Report](/api-reference/reports/get-domains-report), and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints now accept an optional `having` array of post-aggregation filters that select which aggregated results are returned without shrinking the denominators of ratio metrics. Unlike `filters` (which apply before aggregation), `having` lets you narrow to a single brand, domain, or URL while metrics like `share_of_voice` stay measured against the full in-scope population. Population fields (`model_id`, `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`) used in `having` require the matching value in `dimensions`, otherwise the request is rejected. Multiple `having` filters are AND’d together. See [Filtering and dimensions](/api/filtering-and-dimensions) for guidance on when to use `filters` vs `having`. 

## [​ ](#fixed) Fixed 

 `share_of_voice` denominator now scoped per dimension On the [Get Brands Report](/api-reference/reports/get-brands-report), `share_of_voice` is now computed against total mentions within each result’s dimension grouping rather than a single project-wide total. When breaking down by `prompt_id` (or any other dimension), each brand’s share is now its mentions in that grouping divided by all brands’ mentions in the same grouping. Previously the same denominator was applied across every result, distorting share values in broken-down reports. 

 [​ ](#may-27-2026) May 27, 2026 v0.25.2 

## [​ ](#removed) Removed 

 `IMAGE` removed from `features` The `IMAGE` value is no longer part of the `features` array returned by the [List Chats](/api-reference/project/list-chats) and [Get Chat](/api-reference/project/get-chat) endpoints, and is no longer accepted by the [List Chats](/api-reference/project/list-chats) `features` filter. Remaining values: `SHOPPING`, `PRODUCT_COMPARISON`, `AD`, `MAP`, `WEB_SEARCH`. 

 [​ ](#may-22-2026) May 22, 2026 v0.25.1 

## [​ ](#changed-2) Changed 

 List Chats excludes archived and deleted prompts by default The [List Chats](/api-reference/project/list-chats) endpoint now excludes chats whose prompt has been archived or deleted. To include chats for archived prompts (e.g. historical lookback for a prompt that is no longer tracked), pass `include_archived_prompts=true`. Chats for deleted prompts are always excluded. 

## [​ ](#fixed-2) Fixed 

 `features` values on Get Chat The [Get Chat](/api-reference/project/get-chat) endpoint now returns `features` using the same values accepted by the [List Chats](/api-reference/project/list-chats) `features` filter: `SHOPPING`, `PRODUCT_COMPARISON`, `IMAGE`, `AD`, `MAP`, `WEB_SEARCH`. Previously it returned internal element names (e.g. `PRODUCT_GALLERY`, `LOCAL_BUSINESS`, `SOURCES`), which could not be passed back as filters. 

 [​ ](#may-21-2026) May 21, 2026 v0.25.0 

## [​ ](#added-9) Added 

 List Bots Endpoint New [List Bots](/api-reference/project/list-bots) endpoint returning every AI agent bot tracked by Peec Agent Analytics, with each bot’s `id` (user agent), `provider`, and `type` (`training`, `search`, `userQuery`, `other`). 
 Get Agent Visits Endpoint New [Get Agent Visits](/api-reference/project/get-agent-visits) endpoint aggregating AI bot visit counts from connected access logs over a date range. Supports `group_by` across `bot_id`, `response_status`, `request_host`, and `request_path`, an optional `bot_ids` filter, and `time_bucket` (`hour`, `day`, `week`, `month`) for time-series breakdowns. 
 `features` field on Chat Endpoints The [List Chats](/api-reference/project/list-chats) and [Get Chat](/api-reference/project/get-chat) endpoints now return a `features` array — feature flags for special elements detected in the assistant response (shopping carousels, product comparisons, image galleries, ads, map widgets, web search). 
 `features` filter on List Chats The [List Chats](/api-reference/project/list-chats) endpoint now accepts an optional `features` array parameter. Values: `SHOPPING`, `PRODUCT_COMPARISON`, `IMAGE`, `AD`, `MAP`, `WEB_SEARCH`. Multiple values are AND’d — a chat must contain every listed feature to match. 
 `maps` and `ads` fields on Get Chat The [Get Chat](/api-reference/project/get-chat) endpoint now returns `maps` (local-business map cards with name and Google Maps directions URL) and `ads` (paid ad placements with brand, target URL, ad unit type, and card content). 

 [​ ](#april-28-2026) April 28, 2026 v0.24.0 

## [​ ](#added-10) Added 

 `domain_classification` filter for Domains and URLs reports New filter on the [Get Domains Report](/api-reference/reports/get-domains-report) and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints to narrow results by domain classification. Operators: `in`, `not_in`. Values: array of `CORPORATE`, `EDITORIAL`, `INSTITUTIONAL`, `OTHER`, `REFERENCE`, `UGC`, `COMPETITOR`, `OWN`. 
 `url_classification` filter for URLs Report New filter on the [Get URLs Report](/api-reference/reports/get-urls-report) endpoint to narrow results by URL classification. Operators: `in`, `not_in`. Values: array of `HOMEPAGE`, `CATEGORY_PAGE`, `PRODUCT_PAGE`, `LISTICLE`, `COMPARISON`, `PROFILE`, `ALTERNATIVE`, `DISCUSSION`, `HOW_TO_GUIDE`, `ARTICLE`, `OTHER`. 

 [​ ](#april-28-2026-2) April 28, 2026 v0.23.1 

## [​ ](#fixed-3) Fixed 

 `total_chat_count` Now Respects Filters on Domains Report The [Get Domains Report](/api-reference/reports/get-domains-report) endpoint now applies request filters to `total_chat_count`, so the denominator used for `retrieval_rate` and `retrieved_percentage` reflects the filtered scope. 

 [​ ](#april-27-2026) April 27, 2026 v0.23.0 

## [​ ](#added-11) Added 

 Project Profile Endpoints New [Get Project Profile](/api-reference/project/get-project-profile) and [Set Project Profile](/api-reference/project/set-project-profile) endpoints for retrieving and updating the profile of a project. 
 `retrieved_chat_count` and `total_chat_count` on Domains Report The [Get Domains Report](/api-reference/reports/get-domains-report) endpoint now returns `retrieved_chat_count` (distinct chats in which at least one URL from the domain was retrieved) and `total_chat_count` (total chats in scope for the result, used as the denominator for `retrieval_rate` and `retrieved_percentage`). 

 [​ ](#april-23-2026) April 23, 2026 v0.22.0 

## [​ ](#added-12) Added 

 `order_by` Parameter on Report Endpoints The [Get Brands Report](/api-reference/reports/get-brands-report), [Get Domains Report](/api-reference/reports/get-domains-report), and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints now accept an optional `order_by` array to sort results by one or more fields. Each entry takes a `field` and a `direction` (`asc` or `desc`, defaults to `desc`); multiple entries create a multi-key sort. 

 Brands report sortable fields: `visibility`, `visibility_count`, `mention_count`, `sentiment`, `position`, `share_of_voice`. 
 Domains report sortable fields: `citation_rate`, `retrieval_count`, `citation_count`. 
 URLs report sortable fields: `retrieval_count`, `retrievals`, `citation_count`, `citation_rate`. 

 `retrieval_count` and `citation_count` on Domains Report The [Get Domains Report](/api-reference/reports/get-domains-report) endpoint now returns `retrieval_count` (total distinct URL retrievals from the domain across all chats) and `citation_count` (total citations from the domain). 
 `retrieval_count` on URLs Report The [Get URLs Report](/api-reference/reports/get-urls-report) endpoint now returns `retrieval_count` — the total number of distinct chats that retrieved the URL. 

## [​ ](#deprecated-2) Deprecated 

 `retrievals` on URLs Report The `retrievals` field on [Get URLs Report](/api-reference/reports/get-urls-report) is deprecated. Use `retrieval_count` instead. 

 [​ ](#april-22-2026) April 22, 2026 v0.21.0 

## [​ ](#added-13) Added 

 `totalCount` on List Endpoints The [List Brands](/api-reference/project/list-brands), [List Chats](/api-reference/project/list-chats), [List Prompts](/api-reference/project/list-prompts), [List Tags](/api-reference/project/list-tags), [List Topics](/api-reference/project/list-topics), [List Fanout Search Queries](/api-reference/project/list-fanout-search-queries), and [List Fanout Shopping Queries](/api-reference/project/list-fanout-shopping-queries) endpoints now return a `totalCount` field — the total number of matching results across all pages, for building paginated experiences. 

 [​ ](#april-21-2026) April 21, 2026 v0.20.0 

## [​ ](#added-14) Added 

 Get Brand Suggestions Endpoint New [Get Brand Suggestions](/api-reference/project/get-brand-suggestions) endpoint for listing AI-generated brand suggestions for your project. 
 Accept Brand Suggestion Endpoint New [Accept Brand Suggestion](/api-reference/project/accept-brand-suggestion) endpoint to accept a brand suggestion, converting it into a brand. 
 Reject Brand Suggestion Endpoint New [Reject Brand Suggestion](/api-reference/project/reject-brand-suggestion) endpoint to reject a brand suggestion, removing it from the project. 

## [​ ](#deprecated-3) Deprecated 

 `model_id` filters and `model.id` in responses The `model_id` filter and the `model.id` field in responses are deprecated in favor of [model channels](/api/model-channels). A `model_id` filter is now resolved to its channel (e.g. `gpt-4o` → `openai`) and matches every result on that channel, regardless of the underlying model version. The `model.id` field in responses now always reflects the channel’s current model, not the model that originally produced the result. Migrate to `model_channel_id` filters and the `model_channel` object in responses for stable behavior as model IDs are introduced and renamed. 

 [​ ](#april-15-2026) April 15, 2026 v0.19.0 

## [​ ](#added-15) Added 

 List Model Channels Endpoint New [List Model Channels](/api-reference/project/list-model-channels) endpoint returning all available model channels with their current model, description, and active status. 
 `model_channels` on List Models Endpoint The [List Models](/api-reference/project/list-models) endpoint now returns a `model_channels` array on each model, listing the channels it belongs to (a model can belong to more than one). 
 `model_channel` on Chat Endpoints The [List Chats](/api-reference/project/list-chats) and [Get Chat](/api-reference/project/get-chat) endpoints now return a `model_channel` object. [List Chats](/api-reference/project/list-chats) also accepts an optional `model_channel_id` query parameter for filtering. 
 `model_channel` on Query Endpoints The [List Fanout Search Queries](/api-reference/project/list-fanout-search-queries) and [List Fanout Shopping Queries](/api-reference/project/list-fanout-shopping-queries) endpoints now return a `model_channel` object and support `model_channel_id` as a filter. 
 `model_channel_id` Dimension and Filter on Report Endpoints The [Get Brands Report](/api-reference/reports/get-brands-report), [Get Domains Report](/api-reference/reports/get-domains-report), and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints now support `model_channel_id` as a dimension and filter, with an optional `model_channel` object in the response. 

 [​ ](#april-14-2026) April 14, 2026 v0.18.0 

## [​ ](#added-16) Added 

 `name` field on List Models endpoint Model objects returned by [List Models](/api-reference/project/list-models) now include a `name` field — a human-readable display name (e.g. ChatGPT, Perplexity). 
 `channel_title` field on URLs report The [Get URLs Report](/api-reference/reports/get-urls-report) response now includes an optional `channel_title` field (e.g. YouTube channel name, subreddit). 
 `mentioned_brands` field on Domains and URLs reports The [Get Domains Report](/api-reference/reports/get-domains-report) and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints now return a `mentioned_brands` array on each row — a list of brand objects mentioned alongside each domain/URL. 
 `mentioned_brand_id` filter for Domains and URLs reports New filter on the [Get Domains Report](/api-reference/reports/get-domains-report) and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints to narrow results by which brands were mentioned in sources. Operators: `in`, `not_in`. Values: array of brand ID strings. 
 `mentioned_brand_count` filter for Domains and URLs reports New filter on the [Get Domains Report](/api-reference/reports/get-domains-report) and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints to narrow results by the number of distinct brands mentioned. Operators: `gt`, `gte`, `lt`, `lte`. Value: integer &gt;= 0. 
 `gap` filter for Domains and URLs reports New filter on the [Get Domains Report](/api-reference/reports/get-domains-report) and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints to find sources where competitors are mentioned but your own brand is not — useful for identifying content gaps. Operators: `gt`, `gte`, `lt`, `lte`. Value: integer &gt;= 0 (minimum number of competitor mentions). 

 [​ ](#april-02-2026) April 02, 2026 v0.17.0 

## [​ ](#added-17) Added 

 Get Topic Suggestions Endpoint New [Get Topic Suggestions](/api-reference/project/get-topic-suggestions) endpoint for listing AI-generated topic suggestions for your project. 
 Get Prompt Suggestions Endpoint New [Get Prompt Suggestions](/api-reference/project/get-prompt-suggestions) endpoint for listing AI-generated prompt suggestions, with optional filtering by `topic_id`. 
 Accept Topic Suggestion Endpoint New [Accept Topic Suggestion](/api-reference/project/accept-topic-suggestion) endpoint to accept a topic suggestion, converting it into a regular topic. 
 Reject Topic Suggestion Endpoint New [Reject Topic Suggestion](/api-reference/project/reject-topic-suggestion) endpoint to reject a topic suggestion, removing it and its associated prompt suggestions. 
 Accept Prompt Suggestion Endpoint New [Accept Prompt Suggestion](/api-reference/project/accept-prompt-suggestion) endpoint to accept a prompt suggestion, creating a new prompt from it. 
 Reject Prompt Suggestion Endpoint New [Reject Prompt Suggestion](/api-reference/project/reject-prompt-suggestion) endpoint to reject a prompt suggestion, removing it from the suggestions list. 

 [​ ](#march-31-2026) March 31, 2026 v0.16.0 

## [​ ](#added-18) Added 

 Update Prompt Endpoint New [Update Prompt](/api-reference/project/update-prompt) endpoint allowing you to assign tags and topics to prompts. 
 Filter Parameters on Get Prompts Endpoint The [Get Prompts](/api-reference/project/get-prompts) endpoint now supports optional `topic_id` and `tag_id` query parameters, allowing you to filter prompts by topic and tags. 

 [​ ](#march-27-2026) March 27, 2026 v0.15.0 

## [​ ](#added-19) Added 

 Prompt Management Endpoints New [Create Prompt](/api-reference/project/create-prompt) and [Delete Prompt](/api-reference/project/delete-prompt) endpoints for managing prompts via the API. 
 Brand Management Endpoints New [Create Brand](/api-reference/project/create-brand), [Update Brand](/api-reference/project/update-brand), and [Delete Brand](/api-reference/project/delete-brand) endpoints for managing brands via the API. 
 Tag Management Endpoints New [Create Tag](/api-reference/project/create-tag), [Update Tag](/api-reference/project/update-tag), and [Delete Tag](/api-reference/project/delete-tag) endpoints for managing tags via the API. 
 Topic Management Endpoints New [Create Topic](/api-reference/project/create-topic), [Update Topic](/api-reference/project/update-topic), and [Delete Topic](/api-reference/project/delete-topic) endpoints for managing topics via the API. 

 [​ ](#march-26-2026) March 26, 2026 v0.14.0 

## [​ ](#added-20) Added 

 `chat_id` Dimension and Filter on Report Endpoints All report endpoints now support `chat_id` as a dimension and filter. 

 [​ ](#march-23-2026) March 23, 2026 v0.13.0 

## [​ ](#added-21) Added 

 Filter Parameters on Get Chats Endpoint The [Get Chats](/api-reference/project/get-chats) endpoint now supports optional `brand_id`, `model_id`, and `prompt_id` query parameters, allowing you to filter chat results by brand, AI model, and prompt. 
 `is_own` Property on Get Brands Endpoint The [Get Brands](/api-reference/project/get-brands) endpoint now returns an `is_own` property on each brand, allowing you to differentiate between your own brands and competitor brands. 

 [​ ](#march-19-2026) March 19, 2026 v0.12.0 

## [​ ](#added-22) Added 

 `country_code` Dimension and Filter on Report Endpoints All report endpoints now support `country_code` as a dimension and filter. 
 Retrieval Metrics on Domains Report The [Get Domains Report](/api-reference/reports/get-domains-report) endpoint now returns `retrieved_percentage`, `retrieval_rate`, and `citation_rate` metrics. 
 Retrieval Metrics on URLs Report The [Get URLs Report](/api-reference/reports/get-urls-report) endpoint now returns `retrievals` and `citation_rate` metrics. 

## [​ ](#deprecated-4) Deprecated 

 `citation_avg`, `usage_count`, `usage_rate` on Report Endpoints These metrics are deprecated and will eventually be removed in a future version. Use the new retrieval metrics instead. 

 [​ ](#march-18-2026) March 18, 2026 v0.11.0 

## [​ ](#added-23) Added 

 `date` Dimension on Report Endpoints The [Get Brands Report](/api-reference/reports/get-brands-report), [Get Domains Report](/api-reference/reports/get-domains-report), and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints now support `date` as a dimension, enabling daily breakdowns of report data within a single API call. 

 [​ ](#march-13-2026) March 13, 2026 v0.10.0 

## [​ ](#added-24) Added 

 Get Fanout Search Queries Endpoint New [Get Fanout Search Queries](/api-reference/project/get-fanout-search-queries) endpoint for retrieving expanded search queries generated during chat conversations, enabling analysis of how AI models fan out user prompts into multiple search queries. 
 Get Fanout Shopping Queries Endpoint New [Get Fanout Shopping Queries](/api-reference/project/get-fanout-shopping-queries) endpoint for retrieving shopping-related queries and product data captured in AI model responses, enabling insights into product recommendations and shopping search behavior. 

 [​ ](#march-6-2026) March 6, 2026 v0.9.0 

## [​ ](#breaking-changes) Breaking Changes 

 `normalizedUrl` removed from URL Reports The `normalizedUrl` field has been removed from the [Get URLs Report](/api-reference/reports/get-urls-report) endpoint. URLs in the response are now returned already normalized, making this field redundant. 

## [​ ](#changed-3) Changed 

 Significant Performance Improvements Report endpoints have been optimized for significantly improved response times across all report queries. 
 Zero-Visibility Datapoints Included in Brands Report The [Get Brands Report](/api-reference/reports/get-brands-report) endpoint now returns datapoints for brand + dimension combinations even when they have 0 visibility. Previously, these combinations were omitted from the response. 

## [​ ](#added-25) Added 

 Filters on Report Endpoints The [Get Brands Report](/api-reference/reports/get-brands-report), [Get Domains Report](/api-reference/reports/get-domains-report), and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints now support a `filters` array, allowing you to filter results by `model_id`, `tag_id`, `topic_id`, `prompt_id`, `brand_id`, `domain`, and `url` using `in` and `not_in` operators. 
 `share_of_voice` and `mention_count` added to Brands Report The [Get Brands Report](/api-reference/reports/get-brands-report) endpoint now returns `share_of_voice` and `mention_count` fields, providing additional brand performance metrics. 

 [​ ](#march-4-2026) March 4, 2026 v0.8.0 

## [​ ](#added-26) Added 

 Citation Position on Sources and Position on Brand Mentions in Get Chat API The [Get Chat](/api-reference/project/get-chat) endpoint now returns `citationPosition` on each source and `position` on each brand mention, providing precise ranking data for citations and brand references in chat responses. 

 [​ ](#february-20-2026) February 20, 2026 v0.7.1 

## [​ ](#added-27) Added 

 Citation Count on Sources in Get Chat API The [Get Chat](/api-reference/project/get-chat) endpoint now returns `citationCount` on each source, providing visibility into how many times a source is cited in the chat response. 

 [​ ](#february-19-2026) February 19, 2026 v0.7.0 

## [​ ](#added-28) Added 

 Fanout Search Queries in Get Chat API The [Get Chat](/api-reference/project/get-chat) endpoint now returns fanout search queries, providing visibility into the expanded search queries generated during chat conversations. 
 Shopping Products and Queries in Get Chat API The [Get Chat](/api-reference/project/get-chat) endpoint now returns shopping products and their associated queries, enabling insights into product recommendations and shopping-related search behavior. 

 [​ ](#january-27-2026) January 27, 2026 v0.6.0 

## [​ ](#added-29) Added 

 New aggregation attributes in Get Brands Report The [Get Brands Report](/api-reference/reports/get-brands-report) endpoint now returns additional attributes (`sentiment_sum`, `sentiment_count`, `position_count`, `position_sum`, `visibility_count`, `visibility_total`) enabling more flexible aggregations and analytics calculations. 

 [​ ](#january-14-2026) January 14, 2026 v0.5.0 

## [​ ](#added-30) Added 

 URL and Domain Classification field added The [Get Domains Report](/api-reference/reports/get-domains-report) and [Get URLs Report](/api-reference/reports/get-urls-report) endpoints now return a `classification` field for each domain and URL, providing insights into content categories and types. 

 [​ ](#january-13-2026) January 13, 2026 v0.4.0 

## [​ ](#added-31) Added 

 Project Status field added The [Get Projects](/api-reference/company/get-projects) endpoint now returns a `status` field for each project, enabling better visibility into project lifecycle and state. 

## [​ ](#changed-4) Changed 

 Pagination max limit increased The maximum pagination limit has been increased from 1,000 to 10,000 records per request, allowing for more efficient bulk retrieval. 

 [​ ](#december-22-2025) December 22, 2025 v0.3.0 

## [​ ](#added-32) Added 

 Topics and Tags in Get Prompts API The [Get Prompts](/api-reference/project/get-prompts) endpoint now returns `tags` and `topics` fields for each prompt, allowing for better categorization and filtering of prompts. 

 [​ ](#december-01-2025) December 01, 2025 v0.2.0 

## [​ ](#added-33) Added 

 Topics and Tags as Report Dimensions Topics and tags are now available as report dimensions in the API, enabling more granular filtering and analysis of report data. 
 Prompt Volume in Get Prompts API The [Get Prompts](/api-reference/project/get-prompts) endpoint now returns a `volume` field, providing insight into prompt usage and frequency. 
 Mentioned Brands in Get Chat API The [Get Chat](/api-reference/project/get-chat) endpoint now returns a `brands_mentioned` field, providing visibility into which brands are referenced in chat conversations. 

 [​ ](#october-09-2025) October 09, 2025 v0.1.0 

## [​ ](#added-34) Added 

 Initial Release The Peec Customer API is now available. 
 [ Filtering &amp; Dimensions ](/api/filtering-and-dimensions)[ Get Brands Report ](/api-reference/reports/get-brands-report) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api/filtering-and-dimensions

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api/filtering-and-dimensions#webpage","url":"https://docs.peec.ai/api/filtering-and-dimensions","name":"Filtering and dimensions","description":"How dimensions, filters, and having work on report endpoints, and the pitfalls to avoid.","dateModified":"2026-06-10T12:20:15.111Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api/filtering-and-dimensions#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api/filtering-and-dimensions#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Overview","item":"https://docs.peec.ai/api/introduction"},{"@type":"ListItem","position":2,"name":"Filtering and dimensions","item":"https://docs.peec.ai/api/filtering-and-dimensions"}]},{"@type":["Article","TechArticle"],"@id":"https://docs.peec.ai/api/filtering-and-dimensions#article","headline":"Filtering and dimensions","name":"Filtering and dimensions","description":"How dimensions, filters, and having work on report endpoints, and the pitfalls to avoid.","url":"https://docs.peec.ai/api/filtering-and-dimensions","mainEntityOfPage":{"@id":"https://docs.peec.ai/api/filtering-and-dimensions#webpage"},"dateModified":"2026-06-10T12:20:15.111Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) 

# On this page 

 [Overview](#overview) [Dimensions](#dimensions) [filters vs having](#filters-vs-having) [filters, applied before aggregation](#filters-applied-before-aggregation) [having, applied after aggregation](#having-applied-after-aggregation) [Pitfall: collapsing share of voice with filters](#pitfall-collapsing-share-of-voice-with-filters) [Pitfall: double-counting when you sum across tags yourself](#pitfall-double-counting-when-you-sum-across-tags-yourself) Overview 

# Filtering and dimensions

 How dimensions, filters, and having work on report endpoints, and the pitfalls to avoid. 

# [​ ](#overview) Overview 

 The report endpoints, [Get Brands Report](/api-reference/reports/get-brands-report), [Get Domains Report](/api-reference/reports/get-domains-report), and [Get URLs Report](/api-reference/reports/get-urls-report), all share three controls that shape what you get back: 

 `dimensions` decide how the report is broken down. 
 `filters` decide which underlying chats feed into the numbers (applied before aggregation). 
 `having` decide which aggregated results are returned (applied after aggregation). 

 Understanding the difference between these three is the key to getting metrics that mean what you think they mean. 

# [​ ](#dimensions) Dimensions 

 Every report always breaks down by its own entity: the Brands report returns one result per brand, the Domains report one per domain, the URLs report one per URL. A report with no dimensions returns a single aggregated result per entity. Adding dimensions splits each entity’s result into finer slices. 
 You get one result for each combination of the entity and the requested dimension values. For example, on the Brands report, requesting `[&quot;tag_id&quot;, &quot;model_id&quot;]` returns one result per (brand × tag × model) combination, not one per (tag × model) pair. On the URLs report the same dimensions produce one result per (URL × tag × model), and so on. 
 Available dimensions include `model_id`, `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`, `date`, `week`, and `month`. 
 Always break down by engine (`model_channel_id`) rather than only looking at the aggregate. An overall number can hide that you’re strong on one engine and invisible on another. 

# [​ ](#filters-vs-having) `filters` vs `having` 

 Both narrow a report, but they act at different stages and have very different effects on ratio metrics (`share_of_voice`, `visibility`, `retrieval_rate`, `retrieved_percentage`, `citation_rate`). 

## [​ ](#filters-applied-before-aggregation) `filters`, applied before aggregation 

 `filters` decide which chats are counted at all. Because they run before the numbers are computed, they shrink both the numerator and the denominator of every ratio metric. 
 Use `filters` when you want to genuinely restrict the scope of the analysis, for example, “only chats from ChatGPT” or “only chats in Germany.” 

## [​ ](#having-applied-after-aggregation) `having`, applied after aggregation 

 `having` decide which finished results come back. They run after every metric has already been computed, so they do not change any metric’s value. They only hide results you don’t want to see. 
 Use `having` when you want to keep the full-population metrics but only display a subset of results. 
 Population fields (`model_id`, `model_channel_id`, `country_code`, `prompt_id`, `tag_id`, `topic_id`, `chat_id`) in `having` require the matching value in `dimensions`, otherwise the field isn’t part of the breakdown and the request is rejected. 

# [​ ](#pitfall-collapsing-share-of-voice-with-filters) Pitfall: collapsing share of voice with `filters` 

 `share_of_voice` is a brand’s mentions divided by the mentions of all in-scope brands. If you scope to a single brand using `filters`, you remove every other brand from the calculation before it runs, so the denominator becomes just that one brand, and share of voice collapses to `1.0`. 
 Filtering by `brand_id` in `filters` always reports `share_of_voice` as `1.0`. That number is meaningless. 
 To look at one brand while keeping a meaningful share of voice, put `brand_id` in `having` instead: 

```
 { 
 &quot;dimensions&quot; : [ &quot;model_channel_id&quot; ], 
 &quot;having&quot; : [ 
 { &quot;field&quot; : &quot;brand_id&quot; , &quot;operator&quot; : &quot;in&quot; , &quot;values&quot; : [ &quot;kw_abc123&quot; ] } 
 ] 
 } 

```

 This returns only that brand’s results, but its share of voice is still measured against every brand that appeared in the same scope, which is the value you actually want. 
 The same principle applies to the Domains and URLs reports: `filters` shrink the denominators behind `retrieval_rate` and `retrieved_percentage`, while `having` selects results without touching them. 

# [​ ](#pitfall-double-counting-when-you-sum-across-tags-yourself) Pitfall: double-counting when you sum across tags yourself 

 A single prompt can carry multiple tags . (Topics are different: each prompt belongs to exactly one topic, so topics don’t overlap.) 
 When you break a report down by `tag_id`, a chat whose prompt has three tags contributes to all three tag results. That’s exactly what you want when comparing tags against each other, since each tag’s number reflects everything labeled with it. 
 The trouble starts when you take those per-tag results and add them up yourself to get a total. Because overlapping chats were counted under every tag they belong to, your hand-rolled total counts them multiple times and overshoots the truth. 
 Never sum tag-level results to get a project total. A chat tagged `enterprise` and `q4-campaign` is counted under both, so adding the two tag results double-counts it. 
 The fix is simple: let the report do the aggregation. Request the report without the `tag_id` dimension (or with no dimensions at all) and Peec aggregates over distinct chats, counting each one once: 

# Correct

 Request once without `tag_id`. Each chat is counted a single time. 

# Incorrect

 Request broken down by `tag_id`, then add the results together. Multi-tagged chats are counted once per tag. 
 This applies to every additive value (mention and visibility counts, retrieval counts) and to any ratio you might try to reconstruct from them. If you need both views, per-tag detail and a correct total, make two requests rather than deriving one from the other. 
 When you do need to combine results across non-overlapping dimensions (such as `model_id` or `date`), use the aggregation formulas documented on each report endpoint rather than naively averaging. Ratio metrics must be recombined from their underlying sums, not averaged. [ Model Channels ](/api/model-channels)[ Changelog ](/api/changelog) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api/introduction

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api/introduction#webpage","url":"https://docs.peec.ai/api/introduction","name":"Introduction to Peec API","dateModified":"2026-07-17T08:40:14.594Z","isPartOf":{"@id":"https://docs.peec.ai#website"}},{"@type":["Article","TechArticle"],"@id":"https://docs.peec.ai/api/introduction#article","headline":"Introduction to Peec API","name":"Introduction to Peec API","url":"https://docs.peec.ai/api/introduction","mainEntityOfPage":{"@id":"https://docs.peec.ai/api/introduction#webpage"},"dateModified":"2026-07-17T08:40:14.594Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) 

# On this page 

 [Overview](#overview) [Getting Started](#getting-started) Overview 

# Introduction to Peec API

 This API is currently in beta. Endpoints, payloads, and responses may be updated as we refine it. 
 Access to this API is currently limited to Enterprise customers. 

# [​ ](#overview) Overview 

 The API provides a way for developers to programmatically work with the same data available in our platform. All endpoints return data in JSON format, ensuring smooth integration with modern apps, services, and workflows. 

# [​ ](#getting-started) Getting Started 

 To use the API, you’ll need to generate an API key from your [Account](https://app.peec.ai/api-keys). This key is required for authenticating requests and securing access to your organization’s data. 
 For more details on how authentication works, see the [Authentication](./authentication) section. [ Authentication ](/api/authentication) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api/model-channels

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api/model-channels#webpage","url":"https://docs.peec.ai/api/model-channels","name":"Model Channels","description":"A stable way to reference AI surfaces as underlying models evolve.","dateModified":"2026-04-15T13:45:17.051Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api/model-channels#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api/model-channels#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Overview","item":"https://docs.peec.ai/api/introduction"},{"@type":"ListItem","position":2,"name":"Model Channels","item":"https://docs.peec.ai/api/model-channels"}]},{"@type":["Article","TechArticle"],"@id":"https://docs.peec.ai/api/model-channels#article","headline":"Model Channels","name":"Model Channels","description":"A stable way to reference AI surfaces as underlying models evolve.","url":"https://docs.peec.ai/api/model-channels","mainEntityOfPage":{"@id":"https://docs.peec.ai/api/model-channels#webpage"},"dateModified":"2026-04-15T13:45:17.051Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) 

# On this page 

 [Overview](#overview) [When to use a channel vs. a model](#when-to-use-a-channel-vs-a-model) Overview 

# Model Channels

 A stable way to reference AI surfaces as underlying models evolve. 

# [​ ](#overview) Overview 

 A model channel is a stable identifier for a specific AI surface — such as ChatGPT UI , Perplexity API , or Google AI Overview — that stays constant as the underlying model is upgraded or replaced over time. 
 Models change frequently (new versions, new names, API-only models becoming UI models), so filtering by `model_id` can cause historical data to fragment across several IDs. Filtering by `model_channel_id` gives you a continuous view of the same surface, regardless of which specific model was powering it on any given day. 
 Channels are identified by a stable `vendor-index` string such as `openai-0`
or `perplexity-1`. The human-readable description (for example, ChatGPT UI )
is returned alongside each channel and may be updated over time. 

# [​ ](#when-to-use-a-channel-vs-a-model) When to use a channel vs. a model 

 Use `model_channel_id` when you want a stable, long-term view of a surface across model upgrades. 
 Use `model_id` when you care about the specific model version that produced a response. 

 A single model may belong to multiple channels when the same underlying model powers more than one surface. 
 To retrieve the list of available channels, use the [List Model Channels](/api-reference/project/list-model-channels) endpoint. [ Rate Limits ](/api/ratelimits)[ Filtering &amp; Dimensions ](/api/filtering-and-dimensions) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

## https://docs.peec.ai/api/ratelimits

{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://docs.peec.ai/#organization","name":"Peec.ai Docs","url":"https://docs.peec.ai","logo":{"@type":"ImageObject","url":"https://mintcdn.com/peecai-b61a1960/BVQQX1wLWNjFOa_V/images/logo-white.svg?fit=max&auto=format&n=BVQQX1wLWNjFOa_V&q=85&s=5d3f30a498a2c71a875226adc1a9de52"}},{"@type":"WebSite","@id":"https://docs.peec.ai#website","name":"Peec.ai Docs","url":"https://docs.peec.ai","publisher":{"@id":"https://docs.peec.ai/#organization"}},{"@type":"WebPage","@id":"https://docs.peec.ai/api/ratelimits#webpage","url":"https://docs.peec.ai/api/ratelimits","name":"Rate Limits for Peec API","dateModified":"2026-07-17T08:40:14.596Z","isPartOf":{"@id":"https://docs.peec.ai#website"},"breadcrumb":{"@id":"https://docs.peec.ai/api/ratelimits#breadcrumb"}},{"@type":"BreadcrumbList","@id":"https://docs.peec.ai/api/ratelimits#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Overview","item":"https://docs.peec.ai/api/introduction"},{"@type":"ListItem","position":2,"name":"Rate Limits for Peec API","item":"https://docs.peec.ai/api/ratelimits"}]},{"@type":["Article","TechArticle"],"@id":"https://docs.peec.ai/api/ratelimits#article","headline":"Rate Limits for Peec API","name":"Rate Limits for Peec API","url":"https://docs.peec.ai/api/ratelimits","mainEntityOfPage":{"@id":"https://docs.peec.ai/api/ratelimits#webpage"},"dateModified":"2026-07-17T08:40:14.596Z","publisher":{"@id":"https://docs.peec.ai/#organization"},"isPartOf":{"@id":"https://docs.peec.ai#website"}}]} document.documentElement.setAttribute('data-page-mode', "none"); (self.__next_s=self.__next_s||[]).push([0,{"suppressHydrationWarning":true,"children":"(function m(a,b,c){if(!document.getElementById(\"footer\")?.classList.contains(\"advanced-footer\")||\"maple\"===b||\"willow\"===b||\"almond\"===b||\"luma\"===b||\"sequoia\"===b)return;let d=document.documentElement.getAttribute(\"data-banner-state\"),e=null!=d?\"visible\"===d:c,f=document.documentElement.getAttribute(\"data-page-mode\"),g=document.getElementById(\"navbar\"),h=document.getElementById(\"navigation-items\"),i=document.getElementById(\"sidebar\"),j=document.getElementById(\"footer\"),k=document.getElementById(\"table-of-contents-content\"),l=document.getElementById(\"banner\"),m=e?l?.offsetHeight??40:0,n=getComputedStyle(document.documentElement).getPropertyValue(\"--mintlify-slot-header-height\").trim(),o=((n.endsWith(\"px\")?parseFloat(n):0)||(e?a-2.5:a)*16)+m;if(!j||\"center\"===f)return;let p=j.getBoundingClientRect().top,q=window.innerHeight-p,r=(h?.clientHeight??0)+o+32*(\"mint\"===b||\"linden\"===b);if(i\u0026\u0026h)if(q\u003e0){let a=Math.max(0,r-p);i.style.bottom=`${q}px`,i.style.top=`${o-a}px`}else i.style.bottom=\"\",i.style.top=e?`calc(var(--mintlify-slot-header-height, ${a-2.5}rem) + var(--banner-height, 2.5rem))`:`var(--mintlify-slot-header-height, ${a}rem)`,i.style.height=\"auto\";k\u0026\u0026g\u0026\u0026(q\u003e0?k.style.top=\"custom\"===f?`${g.clientHeight-q}px`:`${40+g.clientHeight-q}px`:k.style.top=\"\")})(\n (function l(a,b,c){let d=document.documentElement.getAttribute(\"data-banner-state\"),e=2.5*!!(null!=d?\"visible\"===d:b),f=3*!!a,g=4,h=e+g+f;switch(c){case\"mint\":case\"palm\":break;case\"aspen\":f=2.5*!!a,g=3.5,h=e+f+g;break;case\"luma\":g=3,h=e+g;break;case\"linden\":g=4,h=e+g;break;case\"almond\":g=3.5,h=e+g;break;case\"sequoia\":f=3*!!a,g=3,h=e+g+f}return h})(true, false, \"mint\"),\n \"mint\",\n false,\n)","id":"_mintlify-footer-and-sidebar-scroll-script"}]) 

# On this page 

 [Current Limits](#current-limits) [Response Headers](#response-headers) [Best Practices](#best-practices) Overview 

# Rate Limits for Peec API

 The Peec AI Customer API enforces rate limits to ensure reliable and fair usage. Rate limits are applied per project . 

# [​ ](#current-limits) Current Limits 

 200 requests per minute per project. 

 These limits may be adjusted. Please adhere to the response headers. 
 If your application exceeds the limit, requests will return a `429 Too Many Requests` response until the window resets. 

# [​ ](#response-headers) Response Headers 

 Every response includes standard rate limit headers so you can monitor usage: 

 `X-RateLimit-Limit` – the maximum number of requests allowed in the current window. 
 `X-RateLimit-Remaining` – the number of requests remaining in the current window. 
 `X-RateLimit-Reset` – the time (in seconds) until the rate limit resets. 

 Example response headers: 

```
 X-RateLimit-Limit: 100 
 X-RateLimit-Remaining: 42 
 X-RateLimit-Reset: 23 

```

# [​ ](#best-practices) Best Practices 

 Monitor the rate limit headers in your integration. 
 Implement exponential backoff or retry logic when receiving `429` responses. 
 If you need higher limits, [contact support](mailto:support@peec.ai). 
 [ Authentication ](/api/authentication)[ Model Channels ](/api/model-channels) ⌘ I [ website ](https://peec.ai)[ linkedin ](https://www.linkedin.com/company/peec-ai) [ Powered by This documentation is built and hosted on Mintlify, a developer documentation platform ](https://www.mintlify.com?utm_campaign=poweredBy&amp;utm_medium=referral&amp;utm_source=peecai-b61a1960)

---

