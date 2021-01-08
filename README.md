# Blog-Site

Build an application to display blog articles<br>

## Table fo Contents

1. **[User SignUp](#usersignup)**<br>
2. **[User SignIn](#usersignin)**<br>
3. **[User Profile](#userprofile)**<br>
4. **[Publish](#publish)**<br>
5. **[Home](#homeinfo)**<br>
6. **[Get Articles By Tag](#getarticlesbytag)**<br>
7. **[Commands Available](#commands)**<br>



<a name = "usersignup"></a>

1. ## Create User Account
    #### POST &nbsp; /user/signup
    
    ```
      Request Body : {
        	"username" : "xyz",
            "age" : 23,
            "email" : "xyz@gmail.com",
            "password" : "xyz"
      }
    
    Response : {
        The user has been signed up successfully!
    }
    ```

<a name = "usersignin"></a>

2. ## User SignIn
    #### POST &nbsp; /user/login
    
    ``` 
    Request Body : {
        "email" : "xyz@gmail.com",
        "password" : "xyz"
    }
    
    Response : {
        "msg" : "Authentication has been successful",
        "token" : "JWT_TOKEN"
    }
    ```

<a name = "userprofile"></a>

3. ## User Profile
    #### GET &nbsp; /user/:username
    
    ```
    Authorization: "Beaver JWT_TOKEN"
    
    Response : {
        "data" : userData,                  // User profile info. is stored in data
        "articles" : userArticles;          // All the articles he/she published is stored in articles 
    }
    ```



    
<a name = "publish"></a>

4. ## Publish Article
    #### POST &nbsp; /blog/publish
    
    ```
    Authorization: "Beaver JWT_TOKEN"
    
    Response : {
        "description" : "",                 // Article description is stored in description
        "captionTagList" : ""               // All the tags related to an article stored in captionTagList 
    }
    ```


<a name = "homeinfo"></a>

5. ## Home Info
    #### GET &nbsp; /blog/home
    
    ```
    Authorization: "Beaver JWT_TOKEN"
    
    Response : {
        "articles" : []                     // All the newest to oldest articles based on sorting are stored in this articles list
    }
    ```

<a name = "getarticlesbytag"></a>

6. ## Get Articles By Tag
    #### GET &nbsp; /tags/:tagname
    
    ```
    Authorization: "Beaver JWT_TOKEN"
    
    Response : {
        "articleData" : []                   // All the articles which have given "tagname" are stored in this articleData list
    }
    ```
<a name = "commands"></a>

7. ## Commands Available
   
   ```
   node server.js or nodemon  // to run the node server
   npm test                  // for checking Unit Tests
   ```
    



