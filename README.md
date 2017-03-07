#Reverse Proxy

To use 
1. clone repository
	

    git clone https://github.com/shoaib30/reverse-proxy-container.git
 2. download the dependencies
 

    npm install
3.	set the custom enpoint in config.js

    config.proxy_url = "http://my.custom.endpoint";
4. start the server

    npm start
5. test the endpoint at

    localhost:3000/api/*

*replace the \* with the required path of your custom endpoint*

