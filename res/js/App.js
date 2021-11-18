Vue.component("props-new", {
    data: function() {
        return {}
    },
    props: ['author', 'title'],
        props: {'author': { required: true, validator: function(prp) { return prp.length > 10 } },'title': {},},
        filters: {
            touppercase: function(value) {
            return value.toUpperCase();
        },
        addStar: function(value) {
            return '* ' + value + ' *';
        },
    },
    template: "<p> Author name: {{ author}} wrote {{ title |touppercase | addStar }} </p>",
});

Vue.component("new-component", {
    data: function() {
        return {
            name: 'your_name',
            count: 0
        }
    },
    template: "<p @click= 'count++'> Hello {{name}}, you have clicked {{count}} times </p>",
});

Vue.component("posts-url", {
    data: function() {
        return {}
    },
    props: ['title', 'body'],
    template: "<div> <h3  class= 'title'> Title: {{ title}} </h3> {{ body}} </div>",
});

new Vue(
    {el: '#App',
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.postsUrl = data)
        .then(console.log(this.postsUrl))
    },
    data: {
        authors: [
            { id: 1, author: 'Charles Dickens', title: 'A Tale of Two Cities' },
            { id: 2, author: 'William Shakespeare', title: 'Macbeth' },
            { id: 3, author: 'George Orwell', title: 'Animal Farm' },
            
        ]
        
    }
    
})