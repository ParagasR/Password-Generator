----------------
Title: Password Generator
Description: Generate a random password
Readme Author: Ryan Paragas
Created: 9/15/2021
----------------

Password Generator
================

Link to Deployed Web app: [Password Generator](https://paragasr.github.io/Password-Generator/)

This web app will generate a random password that meets the user's criteria.

When pressing the generate button, it will provide a series of prompts and confirms to meet the user's criteria.

![generate-button](./assets/images/generate.png?raw=true)

The 1st prompt will ask you the length of the password. It must be between 8-128 characters. If a number is entered outside of that range, then it will generate a random
value between 8-128.

![prompt](./assets/images/prompt.png?raw=true)
![confirm](./assets/images/confirm.png?raw=true)

Next it will show a series of prompts
- Upper case
- Lower case
- Special characters
- Numbers

The confirms will restart if BOTH Upper case and Lower case are not selected as apart of the criteria.
Once the password is generated, it will display on the field above the generate button

![result](./assets/images/result.png?raw=true)
