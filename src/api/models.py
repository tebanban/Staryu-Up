from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(8), nullable=False)
    profile_pic = db.Column(db.String(50), nullable=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=True)
    user_supplier = db.relationship('Supplier', backref='user', lazy=True)
    user_favorites = db.relationship('Favorites', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "profile_pic": self.profile_pic,
            "email": self.email,
        }

class Supplier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(8), nullable=False)
    profile_pic = db.Column(db.String(50), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    schedule = db.Column(db.String(50), nullable=True)
    rate = db.Column(db.String(50), nullable=True)
    comentaries = db.Column(db.String(50), nullable=True)
    description = db.Column(db.String(50), nullable=False)
    #jobsDone = db.Column(db.String(50), nullable=False)
    member_since = db.Column(db.String(50), nullable=False)
    image_url = db.Column(db.String(50), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    supplier_favorites = db.relationship('Favorites', backref='supplier', lazy=True)

    def __repr__(self):
        return '<Supplier %s>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone_number": self.phone_number,
            "profile_pic": self.profile_pic,
            "category": self.category,
            "email": self.email,
            "address": self.address,
            "schedule": self.schedule,
            "rate": self.rate,
            "comentaries": self.comentaries,
            "description": self.description,
            #"jobsDone": self.jobsDone,
            "member_since": self.member_since,
            "image_url": self.image_url,
        }

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    supplier_id = db.Column(db.Integer, db.ForeignKey('supplier.id'))
    
    def __repr__(self):
        return '<Favorite %r>' % self.id
    
    def serialize(self):
        return {
            "id": self.id,
        }