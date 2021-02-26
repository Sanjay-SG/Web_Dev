function LinkedListStack() {
    this.head = null;
  }
  
  LinkedListStack.prototype.insert = function (val) {
    node = { data: val, link: null };
    temp = this.head;
  
  // console.log(this.head);
    if (this.head === null) {
      this.head = node;
    } 
    else {
      while (temp.link !== null) {
        temp = temp.link;
      }
      temp.link = node;
      node.link = null;
    }
  };
  
  LinkedListStack.prototype.display = function () {
    temp = this.head;
    if (temp === null) {
      console.log("No nodes");
      return;
    }
    while (temp !== null) {
      console.log(temp.data);
    //   console.log(temp);
      temp = temp.link;
    }
  };

  LinkedListStack.prototype.insertFirst = function(val) {
      let node = {data: val, link: null};
      let temp = this.head;

      if(this.head === null) {
          this.head = node;
      }
      else {
          node.link = this.head;
          this.head = node;
      }
  }

  LinkedListStack.prototype.delete = function() {
      let temp = this.head;
      let prev = null;
      let next = null;
      if(this.head === null) {
          console.log("No nodes");
      }
      else {
          while(temp.link != null) {
              prev = temp;
              temp = temp.link;
              next = temp;
          }
          prev.link = null;
      }
  }
  
  let ll = new LinkedListStack();
  
  ll.insert(10);
  ll.insert(20);
  ll.insert(30);
//   ll.insert(40);
//   ll.insert(50);
//   ll.insert(60);

  ll.insertFirst(100);
  ll.insertFirst(200);

  console.log("====");
  ll.display();
  console.log("====");

  ll.delete();

  ll.display();
  
  ll.delete();

  console.log("===");
  ll.display();
  