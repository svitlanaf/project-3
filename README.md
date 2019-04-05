# _Beep Boop_

#### _Beep Boop is a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number,  04/05/2019_

#### By _**Svitlana Filatova**_

## Description

1. _The program returns a range of numbers from 0 to the users inputted number._
_Input: "4"_
_Output: "0, 1, 2, 3, 4"_
2. _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
_Input: "1"_
_Output: "0, Beep!"_
3. _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
_Input: "2"._
_Output: "0, Beep! Boop!"_
4. _Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that"._
_Input: "3"_
_Output: "0, Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that"._

_Exceptions._
_Exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third_.
1. _The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that"._
_Input: "13"_
_Output: "0, Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that 4, 5, 6, 7, 8, 9, Beep! Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that"._
2. _The number 21 should be replaced with "Boop"._
_Input: "21"_
_Output: "0, Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that 4, 5, 6, 7, 8, 9, Beep! Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that Beep! Beep! Beep! Beep! Beep! Beep! Boop! Boop!"_
3. _The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."_
_Input: "32"_
_Output: "0, Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that 4, 5, 6, 7, 8, 9, Beep! Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that Beep! Beep! Beep! Beep! Beep! Beep! Boop! Boop! Boop! I'm afraid I can't do that Boop! Boop! Boop! Boop! Boop! Boop! I'm sorry, Dave. I'm afraid I can't do that I'm sorry, Dave. I'm afraid I can't do that I'm sorry, Dave. I'm afraid I can't do that"._

## Setup/Installation Requirements

* _Clone this repository_
* _Open index.html in a web browser of your choice._

## Known Bugs / Limitations

* The result in output that meets an exception doesn't have quotation marks.
* Input accepts letters, white spaces and special characters.

## Support and contact details

_Contact Svitlana Filatova at svitlana.filatova@gmail.com._

## Technologies Used

_JavaScript_

### License

*This software (sans images) is licensed under the MIT license.*

Copyright (c) 2019 **_Svitlana Filatova_**
