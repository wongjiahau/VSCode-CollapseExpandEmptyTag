# Collapse/Expand Empty Tag

This extension is used for collapsing or expanding empty HTML/XML tag (inspired by Jetbrain Resharper).
```xml
<example></example>
      |   ^
      |   |
      |   |
      V   |
    <example/>
```
  
## Features
### Collapsing empty tag
![extensionexample](https://user-images.githubusercontent.com/23183656/31164486-00c3e2f2-a91a-11e7-80d9-cde5ac6e510c.gif)

### Expanding tag
![expand](https://user-images.githubusercontent.com/23183656/31164481-f9c7d9f4-a919-11e7-98d7-ec92f973fb51.gif)

## Requirements
1. Visual Studio Code

## Extension Settings

Currently there are no settings available for this extension.

## Known Issues
1) Cannot expand an collapsed tag that is on a few lines. For example, the following tag cannot be expanded unless joined into a single line. (Pull request are welcome!)
```xml
<example 
  att="hello"
  />
```

## Release Notes

- Added collapse/expanding empty tag function.

### 1.0.0

Initial release of Collapse/Expand Empty Tag



**Enjoy!**
