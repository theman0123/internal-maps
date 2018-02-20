//redux

user: {
  isFetching: false,
  error: '',
  authedId: uid,
  [uid]: {
    lastUpdated: timestamp,
    info: {
      username: 'string',
      avatar: 'photo.jpg',
      uid: 'string',
      timestamp: 'number',
      friends: ['uid', 'uid'],
    },
  }
}

iMaps: {
  isFetching: false,
  error: '',
  [iMapId]: {
    info: {
      iMapId: 'string',
      private: false,//maybe highlight some widely shared/commented on maps
      author: uid,//author is only one who can edit
      timestamp: 'string',
      edited: 'timestamp/string',//or null if not edited
      sharedWith: ['uid', 'uid']
      subMaps: ['iMapId'],//[iMapId] or null
      title: 'string',
      mapType: 'K',//or 'A' or 'C' --for custom?
      categories: {
        10: {
          subTitle: 'string',
          description: 'string',
          photo: 'photo.jpg',//optional
        }
      }
      categories: {
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
    },
    lastUpdated: timestamp,
  }
}

comments: {
  isFetching: false,
  error: '',
  [iMapId]: {
    [commentId]: {
      lastUpdate: timestamp,//for stale data
      info: {
        username: 'string',
        comment: 'string',
        avatar: 'string',
        uid: uid,
        timestamp: number,
        edited: timestamp,
      },
    }
  }
}

textEditor/modal: {
  isOpen: false,
  mapType: 'K',
  title: 'string',
  private: false,
  categories: {
    malkuth: {
      subtitle: 'string',
      description: 'string',
      photo: 'photo.jpg',
    }
  }
}

//no need for listeners...