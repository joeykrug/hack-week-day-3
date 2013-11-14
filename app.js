var express = require('express');
var path = require('path');

users = {
    12345: {
        _id: 12345,
        first_name: 'Andy',
        last_name: 'Russell',
        posts: [],
        photos: [],
        friends: [6789]
    },

    6789: {
        _id: 6789,
        first_name: 'Aloke',
        last_name: 'Desai',
        posts: [],
        photos: [],
        friends: [12345],
    }
};

var me = users[12345];

var current_user = null;

// Retrieve a user from storage
function getUser(user_id, done) {
    return done(null, users[user_id]);
}

// Add a post to a user's wall
function addPost(user, post) {
    users[user._id].posts.push(post);
}

// Add a photo to the user's profile
function addPhoto(user, photo) {
    users[user._id].photos.push(photo);
}

var app = express();
app.configure(function() {
    app.set('view engine', 'ejs');

    app.use(express.json());
    app.use(express.urlencoded());

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(app.router);
});

// Site routes
app.get('/', function(req, res) {
    res.render('index', { user: current_user });
});

app.get('/user/:id', function(req, res) {
    var id = parseInt(req.params.id);
    if (current_user) {
        // Render user profile
        res.render('profile', { user: current_user, posts: current_user.posts });
    } else {
        res.redirect('/', 401);
    }
});

app.get('/login', function(req, res) {
    current_user = me;
    res.redirect('/');
});


app.get('/logout', function(req, res) {
    current_user = null;
    res.redirect('/');
});

app.post('/user/:user_id/wallpost', function(req, res) {
    if (!current_user) {
        res.redirect('/', 401);
    } else {
        var post = {
            time: new Date(),
            sender_name: current_user.first_name + ' ' + current_user.last_name,
            text: req.body['post']
        };
        addPost(current_user, post);
        res.redirect('/user/' + current_user._id);
    }
});

app.post('/user/:user_id/upload', function(req, res) {
    if (!current_user) {
        res.redirect('/', 401);
    } else {
        var photo = {
            url: req.body['url']
        };
        addPhoto(current_user, photo);
        res.redirect('/user/' + current_user._id);
    }
});

app.listen(3000);
