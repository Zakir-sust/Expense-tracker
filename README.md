This project is part of CSE-332 Software Engineering Lab.

Introduction:
Tracking your spending is often the first step in getting your finances in order. By understanding what you spend money on and how much you spend, you can see exactly where your cash is going and areas where you can cut back.

It’s easy to make this part of your everyday routine thanks to expense tracker this app that helps you manage your money on the go. This app certainly overlap with other budgeting apps, but while the latter provide a big-picture view of your finances,an expense tracker app put more of an emphasis on your spending. This app categorizes your expenses and helps you get a good idea of your purchasing behavior.

Features:
- User Signup/Login system with JWT authentication
- can add,delete,query expense information
- shows a list of expense up to now in descending order.Additionally shows cost for this
  month for a quick statistics.
- When inserting new expense information,expense can be put into a category. So you can
  query  with the category name to view information abouth only that category.
- can query for a range of time too.

How to use:
1) clone the repository
    - git clone
2) install the dependencies.All the required dependencies are included in the package.json .
 Just run
    - npm install
3) go to /backend and start the backend server
    - node start
4) from the root directory start the react app using
    - npm start

Screenshots :
In the starting page,You can signup or login.You can use the dummy user with populated db - username:foo,password:12345 


<img src="/images/1.png" alt="signup" width="900"/>  
<img src="/images/2.png" alt="signup" width="900"/>
<img src="/images/3.png" alt="login" width="900"/>

- The homepage.Click [Add New Record] for inserting a new record/expense info and red x for
  deleting a record.

<img src="/images/4.png" alt="login" width="900"/>

- insert necessary info in the fields

<img src="/images/5.png" alt="login" width="900"/>
<img src="/images/6.png" alt="login" width="900"/>

- Click the [Filter] in the navigation bar to query

<img src="/images/7.png" alt="login" width="900"/>

- Add custom date range and/or item name for querying

<img src="/images/8.png" alt="login" width="900"/>
<img src="/images/9.png" alt="login" width="900"/>

- list genarated according to query!

<img src="/images/10.png" alt="login" width="900"/>

