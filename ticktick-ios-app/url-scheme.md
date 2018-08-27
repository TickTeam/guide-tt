#### iOS Scheme

Ready to be more productive and integrate with other apps? With iOS URL Scheme, certain commands can be sent from third-party apps to TickTick and you can build your own workflow through URLs. This guide will explain how it works. <br/>

TickTick can execute the following commands:

* Add tasks: create a new task named "Buy some eggs".
* Show smart list: Show the "Today" list.
* Search tasks: Search tasks with the keyword "Meeting".

<br/>

All the commands can be sent to TickTick in the following format as a specific URL:

> ticktick://v1/command?parameter1=value1¶meter2=value2&…

<br/>

Open these links will launch TickTick and execute the command. TickTick currently supports three kinds of commands, including "add_task", "show" and "search". In each command, there are one or more parameters, when adding a task, you can input "title", "startDate", "list" and other parameters we provide. Each parameter corresponds to a value, for example when adding a task, the value of "title" can be "Buy some eggs".

<br/>

If you want to show the smart list "Today" in TickTick, the URL should look like:

> ticktick://v1/show?smartlist=today

<br/>

##### Descriptions of how to execute each command

1. "add_task" command

This command supports the x-callback-url protocol, in which it allows you to go back to the previous app after successfully adding tasks in TickTick. TickTick currently supports three callback formats: x-success, x-error, and x-cancel callbacks.

<br/>

"add_task" command will be sent to TickTick in the following format as a specific URL:

> ticktick://x-callback-url/v1/add_task?parameter1=value1¶meter2=value2&…

<br/>

The following parameters are included in this command: ![urlscheme1](../../images/ticktick-ios-app/tumblr_inline_pby6exerSn1s0t9ry_640.png)

Examples:

Create a task named "Buy some eggs".

> ticktick://x-callback-url/v1/add_task?title=buy%20some%20eggs

Create a task named "Buy some eggs" at "6pm" in "shopping" list.

> ticktick://x-callback-url/v1/add_task?title=buy%20some%20eggs&startDate=2018-05-08T18:00:00.000+0000&allDay=false&list=shopping

<br/>

When using x-success, the following parameters will be returned to the previous app after successfully adding tasks in TickTick: ![urlscheme2](../../images/ticktick-ios-app/tumblr_inline_pby6l1FIc41s0t9ry_640.png)

2."show" command

"show" command will be sent to TickTick in the following format as a specific URL:

> ticktick:///v1/show?parameter=value

<br/>

The following parameters are included in this command:

![urlscheme3](../../images/ticktick-ios-app/tumblr_inline_pby6m7ofNi1s0t9ry_640.png)

Example:

1.Show the smart list "Today".

> ticktick://v1/show?smartlist=today

2."search" command

"search" command will be sent to TickTick in the following format as a specific URL:

> ticktick:///v1/search?parameter=value

<br/>

The following parameters are included in this command:

![urlscheme4](../../images/ticktick-ios-app/tumblr_inline_pby6orZCG01s0t9ry_640.png)

Example:

1. Search tasks with the keyword "shopping".

> ticktick://v1/search?keyword=shopping

<br/>

##### If you are using the Workflow app, you can open the URLs below and try them out!

1. Add tasks to TickTick from clipboard (First row: task title; Other rows: description contents) [https://workflow.is/workflows/1759c8ffc39740329393faa73b02bf95](https://workflow.is/workflows/1759c8ffc39740329393faa73b02bf95)

2. Add tasks to TickTick from clipboard (First row: task title; Other rows: subtasks) [https://workflow.is/workflows/247b72c04dc8490089a886daa23c1bac](https://workflow.is/workflows/247b72c04dc8490089a886daa23c1bac)

3. Add tasks to TickTick from clipboard (Each row: different tasks) [https://workflow.is/workflows/cd95821f4cf24c1897c26068329cfde8](https://workflow.is/workflows/cd95821f4cf24c1897c26068329cfde8)

4. Edit clipboard contents and send to TickTick (First row: task title; Other rows: description contents) [https://workflow.is/workflows/5503aad19d4e441e9e114ac8f1209a3f](https://workflow.is/workflows/5503aad19d4e441e9e114ac8f1209a3f)

5. Add tasks to TickTick from Workflow input box (First row: task title; Other rows: description contents) [https://workflow.is/workflows/bb26331e916c4fa48308c60e1d70e4c6](https://workflow.is/workflows/bb26331e916c4fa48308c60e1d70e4c6)

6. Add tasks to TickTick from Workflow input box (First row: task title; Other rows: subtasks) [https://workflow.is/workflows/12e5dcba833649e3b1ecbec4dddf53b7](https://workflow.is/workflows/12e5dcba833649e3b1ecbec4dddf53b7)

7. Add tasks to TickTick from Workflow input box (Each row: different tasks) [https://workflow.is/workflows/b18e0f6e46554eed9a699dba2fdca788](https://workflow.is/workflows/b18e0f6e46554eed9a699dba2fdca788)

8. Search tasks on clipboard in TickTick [https://workflow.is/workflows/9cb56c741eb141478d52b361e8238e2b](https://workflow.is/workflows/9cb56c741eb141478d52b361e8238e2b)

9. Quick open "Today" [https://workflow.is/workflows/4704b4d055984b959e8092d61fadb3b5](https://workflow.is/workflows/4704b4d055984b959e8092d61fadb3b5)

##### If you are using the Drafts app, you can open the URLs below and try them out!

1. Batch add tasks to TickTick [https://actions.getdrafts.com/a/1Mg](https://actions.getdrafts.com/a/1Mg)

2. Add tasks with description contents to TickTick [https://actions.getdrafts.com/a/1Mi](https://actions.getdrafts.com/a/1Mi)

3. Add tasks with subtasks to TickTick [https://actions.getdrafts.com/a/1Mh](https://actions.getdrafts.com/a/1Mh)

