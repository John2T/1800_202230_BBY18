function todolist(){
    return {
        todos: [],
        focusItem: function(index) {
            if ( !this.todos[index].open ) {
                for(let i = 0; i < this.todos.length; i++){
                    this.todos[i].open = false;
                    this.todos[i].focused = i == index;
                }
            }
        },
        openItem: function(index) {
            for(let i = 0; i < this.todos.length; i++){
                this.todos[i].focused = false;
                this.todos[i].open = i == index;
            }
            setTimeout(()=>document.getElementById(`titleField${index}`).focus(),10);
        },
        defocusItems: function() {
            for(let i = 0; i < this.todos.length; i++){
                this.todos[i].focused = false;
                this.todos[i].open = false;
            }
        },
        removeItem: function(index) {
            this.todos = this.todos.filter((todo, i) => {
                return i == index ? false : true;
            });
            setTimeout(()=>this.defocusItems(),10);
        },
        addItem: function() {
            this.todos.push({
                title: '',
                notes: '',
                checked: false,
                focused: false,
                open: false
            });
            setTimeout(()=>this.openItem(this.todos.length-1),10);
        }
    }
}

