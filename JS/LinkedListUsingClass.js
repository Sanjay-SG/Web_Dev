class LinkedListStack {
    constructor() {
        this.head = null;
    }
    insert(val) {
        let node = { data: val, link: null };
        let temp = this.head;

        // console.log(this.head);
        if (this.head === null) {
            this.head = node;
        }
        else {
            while (temp.link !== null) {
                temp = temp.link;
            }
            temp.link = node;
            // node.link = null;
        }
    }
    display() {
        let temp = this.head;
        if (temp === null) {
            console.log("No nodes");
            return;
        }
        while (temp !== null) {
            console.log(temp.data);
            console.log(temp);
            temp = temp.link;
        }
    }
}



let ll = new LinkedListStack();

ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
// ll.insert(50);
// ll.insert(60);

ll.display();
