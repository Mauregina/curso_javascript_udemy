const user = {
    name: 'Maura',
    sayUserName() {
        console.log(this)
        console.log('User name: ' + this.name)
        
        // usando arrow function o elemento this se refere ao elemento pai
        setTimeout(() => {
            console.log(this)
            console.log('User name: ' + this.name)
        })
    }
}

user.sayUserName()