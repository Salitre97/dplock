# DPLOCK : Partnered with DP Containers

Developement of web application using Ionic Framework
--
To run application run: 
1. run 'ionic serve'
2. check requirements.txt for dependenacies.

2 modes:
-
1. Admin
2. User (authorized)

Registration:
-
1. Require an invitiaion code alongside other registration info name, email, password etc.
2. Validate code agianst the ones stored in database to check if code is valid and unused.
3. Code is one-time use only.
4. ***Admin is to provide the one time code.***

Bluetooth:
-
1. Will be used to talk to ESP32 and access data such as: container status, battery life.
3. list of devices will be shown on web application, where user can select device needed.
   
Security:
-
1.Secure Simple Pairing (SSP)
2.Role-Based Access Control (RBAC)
3.

Hardware:
-
1. Exterior button to trigger ESP32 to wake up.
2. If not connected within 15-30 seconds, ESP32 will go back to sleep.
3. 

Power:
-
1. ESP32 low power mode: ~ 260 uA (ULP co-processor, I2C, GPIO, RTC & RTC memory)
2. 
