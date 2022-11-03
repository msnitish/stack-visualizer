class Stack { 
  
    // Array is used to implement stack 
    constructor(max_size) 
    { 
        this.items = [];
		this.max_size = max_size; 
    }
   
// push an element into stack	
push(element) 
{ 
	// push element into the list items 
	    if(this.size() < this.max_size)
	    	this.items.push(element); 
		else return "overflow";
	
	
} 
// pop an element from the stack
pop() 
{ 
	if (this.items.length == 0) 
		return "underflow"; 
	return this.items.pop(); 
} 

// Check if the stack is empty
isEmpty() 
{ 
	// return true if stack is empty 
	return this.items.length == 0; 
} 

// Return the top most element of the stack / Most recently added element.
peek() 
{ 
	
	return this.items[this.items.length - 1]; 
}

// return the number of elements in the stack
size(){
    return this.items.length;
}

}

module.exports = Stack