## Entities

### Car wash

* ID
* Name
* Services
* Address
* Has electric plant
* Has Individual Women bathroom
* Has Individual Man bathroom  
Partition Key => **ID**

### Employees

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
* Car ID
* Turn  
  Partition Key => ID  
  Global Secondary Index => Partition Key: **Employee ID** + Sort Key: **Date**



