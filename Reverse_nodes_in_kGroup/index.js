/*
Reverse Nodes in k-Group


the link to the problem https://leetcode.com/problems/reverse-nodes-in-k-group/

time complexity: O(n)
space complexity: O(1)

explanation: 
-first we use a dummy node to avoid edge cases, we set its next to the head of the list
-then we reverse each k-group of nodes independantly 
-for that we use four pointers preGr,afterGr,prev,next
-preGr is the pointer directly before the beginning og a new group afterGr is the pointer after it
-we set prev to afterGr so that the previous of the first node in the group, which will later become the last node will points to the beginning of the next group
-we update preGr.next to Knode after each iteration such that Knode is initially the last node in the group, after reversing it becomes the first node
-after that we update preGr to temp (the outer temp) which was the first node in the group and then becomes the last after reversing
*/

var reverseKGroup = function(head, k) {
    const getKnode = (curr,k)=>{
        while(curr && k!==0) {
            curr=curr.next;
            k--;
        }
        return curr;
    }
    let dummy=new ListNode(0,head);
    let preGr=dummy;
    while(true){
        let kNode=getKnode(preGr,k);
        if(!kNode) break;
        let afterGr=kNode.next;
        let [prev,curr] = [afterGr,preGr.next];
        let temp=preGr.next;
        while(curr!==afterGr){
            let temp = curr.next;
            curr.next=prev;
            prev=curr;curr = temp;
        }
        preGr.next=kNode;
        preGr=temp;
    }
    return dummy.next;
};