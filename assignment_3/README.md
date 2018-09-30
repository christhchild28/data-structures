Christian Theodore Data Structures, Weekly Assignment 3

**Learnings from Last Week**
Based on the in-class walk-through of the Week 2 Assigment starter code, I updated my script to do the following:
1. Using the <td> tag as a starting point, method chain to the HTML, then to the strings using the index to reference specific points in the table (the startign numbers of each address)
2. Used JSON.stringify(meetings) in order to cleanly save all addresses to an array that can be looped over for future use.

**Week 3 Assignment Steps:**
1. I created a new account with Texas A&M Global Services in order to secure the API key needed to make requests.
2. Stored that API key as an environmental variable in my Cloud 9 console. 
3. Defined this as a constant: const apiKey = process.env.TAMU_KEY; in my script so that it could be retrieved for each call without being revealed publicly
3. A sticking point for me was that my starter code and my Linux terminal were running separate processes. 
4. My starter code would not run. After console logging every line, discovered that my bash shell and my starter code were running in separate processes
5. I then added my API key to my global bash profile with the following command: ~/.bash_profile. This resolved the problem.
6. Pushed the street addresses and corresponding lat/longs to the meetings data array. 29 Records were returned. 
