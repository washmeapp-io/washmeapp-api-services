## Entities

### Users - This is for clients and owners

* ID
* Name
* Contact Number
* Email
* Role (owner, user)  
Partition Key => **ID**   
  Global Secondary Index => Partition Key: **email**
  Global Secondary Index => Partition Key: **Contact Number**


### Car wash

* ID
* Owner ID
* Name
* Services
* Address
* Has electric plant
* Has Individual Women bathroom
* Has Individual Man bathroom  
Partition Key => **ID**
Global Secondary Index => Partition Key: **Owner ID** + Sort Key: **ID**

### Employees - this is only for employees

* ID
* Name
* Role (carwashers, admin, others)
* Car was ID  
Partition Key => **ID**  
Global Secondary Index => Partition Key: **Car was ID** + Sort Key: **ID**


### Cars

* ID
* Contact Number
* Brand
* Color  
  Partition Key => **ID**  
  Global Secondary Index => Partition Key: **ID** + Sort Key: **Brand**


### Turns

* Date
* Sequence (1, 2, 3, 4, 5, 6,....)
* WorkId  
  Partition Key => Partition Key: **Date** + Sort Key: **Sequence**

### Works

* ID
* Description
* Date
* Status (Cleaning, done, etc)
* Car wash ID
* Employee ID
* Client ID (user ID)
* Car ID
* Turn  
  Partition Key => ID  
  Global Secondary Index => Partition Key: **Employee ID** + Sort Key: **Date**
  Global Secondary Index => Partition Key: **Client ID** + Sort Key: **Date**



