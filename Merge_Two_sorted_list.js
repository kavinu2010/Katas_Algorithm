var mergeTwoLists = function (list1, list2) {
    var listToReturn = new ListNode();
    var head = listToReturn;


    while (list1 && list2) {
        if (list1.val < list2.val) {
            head.next = new ListNode(list1.val);
            head = head.next;
            list1 = list1.next;
        } else if (list1.val === list2.val) {

            head.next = new ListNode(list1.val);
            head = head.next;
            head.next = new ListNode(list2.val);
            head = head.next;
            list1 = list1.next;
            list2 = list2.next;
        } else {
            head.next = new ListNode(list2.val);
            head = head.next;
            list2 = list2.next;
        }
    }
    if (list1) {
        head.next = list1;
    }

    if (list2) {
        head.next = list2;
    }

    return listToReturn.next;
};
