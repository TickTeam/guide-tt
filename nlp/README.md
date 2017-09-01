### How Smart Date Parsing works in TickTick

Smart Date Parsing provides a much easier way for users to set date & reminder efficiently in the application. When adding a task via typing or voice, information on dates will be automatically parsed and set on your calendar. However, not all the date formats can be recognized by Smart Date Parsing. Below are some examples of the date formats you can use in TickTick.

#### Date & Time

| What you type | How TickTick parses |
| :--- | :--- |
| today | Today |
| tomorrow | Tomorrow |
| monday | Monday \(Also works as "mon"\) |
| next monday | Next Monday \(Also works as "next mon"\) |
| march | March 1 \(Also works as "mar"\) |
| mar 6 | the next Mar 6 \(Also work as "march 6, 3/6, 03/06, 3-6, 03-06"\) |
| mar 6, 2018 | Mar 6, 2018 \(Also work as "march 6, 2018, 2018/3/6, 2018/03/06, 3/6/2018, 03/06/2018"\) |
| 9:00 | the next 9:00 |
| 9 pm | the next 9 pm \(Also works as "9pm, 9 PM, 9 p.m., 9:00 pm"\) |
| mar 6, 9 pm | 9 pm on the next March 6 |
| morning | the next 9 am |
| noon | the next 12 pm |
| afternoon | the next 1 pm |
| evening | the next 5 pm |
| night | the next 8 pm |
| midnight | the next 12 am |

When you create a task with unclear date information, TickTick will automatically parse it on the most recent date & time. For example, if typing "remind me at 9:00" at 4 pm, a task that’s due on today 9 pm will be created.

#### Repeat Rules

| What you type | How TickTick parses |
| :--- | :--- |
| every day | Every day starting from today \(Also works as "daily"\) |
| every 2 days | Every 2 days starting from today |
| every 2 weeks | Every 2 weeks starting from today |
| every 2 months | Every 2 months starting from today |
| every 3 years | Every 3 years starting from today |
| every monday | Every Monday starting from the most recent Monday |
| every weekday | Every Monday, Tuesday, Wednesday, Thursday, and Friday starting from the most recent weekday |
| every weekend | Every Saturday, and Sunday starting from the most recent weekend |
| 1st day of every month | 1st day of every month |
| last day of every month | last day of every month |

#### Reminders in Advance

| What you type | How TickTick parses |
| :--- | :--- |
| remind me 3 minutes / hours / days / weeks earlier | Remind me 3 minutes/hours/days/weeks earlier, basing on the date and time of the task |
| remind me earlier | Remind me 5 minutes earlier, basing on the date and time of the task |

#### Delayed Reminders

| What you type | How TickTick parses |
| :--- | :--- |
| 3 minutes / hours / days / weeks / months / years later | 3 minutes/hours/days/weeks/months/years later ,basing on the current time \(Also works as"after 3 minutes", "in 3 minutes "\) |
| 2 hours 30 minutes later | 2 hours 30 minutes later, basing on the current time \(Also works as "after 2 hours 30 minutes", "in 2 hours 30 minutes"\) |



