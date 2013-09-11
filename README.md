Demo App
==========

stack consisting of AngularJS + Express + NodeJS + Socket.IO + AMQP + Firebase
This app servers to deliver an alarm panel where you can see status of the alarm and arm/disarm it.

The application communicates via socket.io to the server where items are entered into RabbitMQ.
Updates to the screen are via Firebase.js

From there, a windows service listens to rabbitMQ to deal with the alarm panel.  
see: https://github.com/wolfpackt99/AJS-AlarmPanel

