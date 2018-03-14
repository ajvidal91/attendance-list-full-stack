var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const status = this.parentNode.parentNode.childNodes[3].innerText
        fetch('students', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'status': status
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
