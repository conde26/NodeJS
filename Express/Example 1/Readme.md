### Modules 
<br>

We need some extra library to use this script. 

```node
npm install dotenv
```

### Run 
<br>

```node
node --watch index.js 
```

### Use
<br>

We can use powershell to test this API. 

* Endpoint: /userinfo

```powershell 
$Body = @{
	"username" = "Jose"
	"age" = "24"

}

Invoke-RestMethod "http://127.0.0.1:3000/userinfo" -Body $Body -Method POST -ContentType "application/json"
```

* Endpoint: /holamundo

```powershell 
Invoke-RestMethod "http://127.0.0.1:3000/holamundo" 
```