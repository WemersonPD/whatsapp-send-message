function removeMask(phone='(99) 99-99') {
    for(let index = 0; index <= phone.length; index++ ) {
        if(!Number.isInteger(parseInt(phone[index]))) {
          phone = phone.replace(phone[index], '');
        }
    }
    return phone;
}

