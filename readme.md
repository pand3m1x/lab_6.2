Why is it important to handle errors for each individual API call
rather than just at the end of the promise chain?

    It addresses every possible step that may have a problem. Like, 
    in my apiSimulator code, the first step of retrieving a product is
    the product information, and then the review, and then similiar items. 
    When I run my code, and there is a problem with the product information, 
    it would tell me then. Not unlike if I had it at the end, if I just received
    "Error" I'd have to figure out where the error happened, and I could spend
    a long time trying to figure it out. But because my error happened at
    retrieving product information I know to just go there, instead of, say,
    spending forever on related items.


How does using custom error classes improve debugging and error identification?

    Well, I only have one error in my code at the time of writing this (as of 9pmEST), 
    but,by having an error class, you can re-assign it when needed. It would be like
    a reusable frame of reference to attach to functions when nesseccary?


When might a retry mechanism be more effective than an immediate failure response?

    I don't think I used a retry mechanism... But from what I understand, 
    life is unreliable, and ergo, so is the internet/technology. Whenever we retry it gives
    our code another chance to complete it's original API grab attempt whenever there is a 
    server glitch, network hiccups, etc. Instead of giving up and telling the USER it tried,
    which would cause USER frustration. Have we gone over Exponential Backoff? How do I add a 
    Jitter?

    Shah, E. (2025, July 31). Building Resilient Systems: The power of retry mechanisms with exponential backoff | by Eshika Shah | Medium. Medium. https://medium.com/@eshikashah2001/building-resilient-systems-the-power-of-retry-mechanisms-with-exponential-backoff-60bebad6a57b 

