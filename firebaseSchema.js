//firebase-NoSQL

/users
  [uid]: {
    username: 'string',
    avatar: 'photo.jpg',
    uid: 'string',
    timestamp: 'number',
    friends: ['uid', 'uid'],
  }

/usersMaps/${uid}
  [iMapId]: {
    iMapId: 'string',
    private: false,//maybe highlight some widely shared/commented on maps
    author: uid,//author is only one who can edit
    timestamp: 'string',
    edited: 'timestamp/string',//or null if not edited
    sharedWith: ['uid', 'uid']
    subMaps: ['iMapId'],//[iMapId] or null
    title: 'string',
    mapType: 'K',//or 'A' or 'C' --for custom?
    sephiroths: {
      10: {
        subTitle: 'string',
        description: 'string',
        photo: 'photo.jpg',//optional
      }
    }
    elements: {
      fire: {
        subTitle: 'string',
        description: 'string',
        photo: 'photo.jpg',
      },
      water: {...},
      air: {...},
      earth: {...},
    }
    custom: {
      numberOfCategories: 3-12,//min-max
      categories: {
        1: {
          title: 'string',
          subtitle: 'string',
          desccription: 'string',
          photo: 'photo.jpg',
        }
      }
    }
  }

/sharing/${uid}//maps you are sharing with others
  ['iMapId', 'iMapId']

/borrowed/${uid}//maps others are sharing with you
  ['iMapId', 'iMapId']

/comments/${iMapId}
  [commentId]: {
    username: 'string',
    comment: 'string',
    avatar: 'string',
    uid: uid,
    timestamp: number,
    edited: timestamp, //null === false
  }