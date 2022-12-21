
export const getComicById = (id) => {
  return comics.find((comic) => comic.id === parseInt(id));
};

export const getChapterPages = (comicId, chapterId) => {
  const comic = getComicById(comicId);
  const chapter = comic.chapters.find((chapter) => chapter.id === parseInt(chapterId));
  return chapter.pages;
}

export const comics = [
    {
      id: 1,
      title: 'My Hero Academia',
      desc: "Read Latest Chapter Today!",
      coverimg: 'https://i.ibb.co/SX7H40V/MHA.jpg',
      chapters: [
        {
          id: 1,
          pages: [
            'https://i.ibb.co/7QNch0D/03.jpg',
            'https://i.ibb.co/s9nq9LB/04.jpg',
            'https://i.ibb.co/7J5GDjS/05.jpg',
            'https://i.ibb.co/vzkbP1p/06.jpg',
            'https://i.ibb.co/LZb1Dcp/07.jpg',
          ]
        },
        {
          id: 2,
          pages: [
            'https://i.ibb.co/qN5CPmQ/08.jpg',
            'https://i.ibb.co/F6RxXgh/10.jpg',
            'https://i.ibb.co/cNvwTsp/11.jpg',
            'https://i.ibb.co/dBVnQWP/12.jpg',
            'https://i.ibb.co/HGbjfVp/13.jpg',
          ]
        },
        {
          id: 3,
          pages: [
            'https://i.ibb.co/qN5CPmQ/08.jpg',
            'https://i.ibb.co/F6RxXgh/10.jpg',
            'https://i.ibb.co/cNvwTsp/11.jpg',
            'https://i.ibb.co/dBVnQWP/12.jpg',
            'https://i.ibb.co/HGbjfVp/13.jpg',
          ]
        },
        {
          id: 4,
          pages: [
            'https://i.ibb.co/qN5CPmQ/08.jpg',
            'https://i.ibb.co/F6RxXgh/10.jpg',
            'https://i.ibb.co/cNvwTsp/11.jpg',
            'https://i.ibb.co/dBVnQWP/12.jpg',
            'https://i.ibb.co/HGbjfVp/13.jpg',
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Kaiju no.8',
      coverimg: 'https://i.ibb.co/LQNdD1z/kj8.jpg',
      desc: 'Description for comic 2',
      chapters: [
        {
          id: 1,
          pages: [
            'https://i.ibb.co/PrVfCYQ/14.jpg',
            'https://i.ibb.co/pb44rPW/15.jpg',
            'https://i.ibb.co/j3vXD8p/16.jpg',
            'https://i.ibb.co/k3SxZzH/17.jpg',
            'https://i.ibb.co/syGMc4c/18.jpg',
          ]
        },
        {
          id: 2,
          pages: [
            'https://i.ibb.co/8zGKSJd/19.jpg',
            'https://i.ibb.co/d7WhCCj/20.jpg',
            'https://i.ibb.co/YfxH9Dq/21.jpg',
            'https://i.ibb.co/WFjMnr7/22.jpg',
            'https://i.ibb.co/gJfS4hw/23.jpg',
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Batman Year One',
      coverimg: 'https://i.ibb.co/QvWkNgF/2.jpg',
      desc: 'Description for comic 3',
      chapters: [
        {
          id: 1,
          pages: [
            'https://i.ibb.co/TbJWgY7/24.jpg',
            'https://i.ibb.co/F3YNPdT/25.jpg',
            'https://i.ibb.co/mc3wGQz/26.jpg',
            'https://i.ibb.co/fkz59J0/27.jpg',
            'https://i.ibb.co/9pKRvzX/28.jpg',

  ]
        },
        {
          id: 2,
          pages: [
            'https://i.ibb.co/sWRCVBh/29.jpg',
            'https://i.ibb.co/zxPpvkS/30.jpg',
            'https://i.ibb.co/S54NMPS/31.jpg',
            'https://i.ibb.co/M2y3b3J/33.jpg',
            'https://i.ibb.co/nk2tXyJ/34.jpg',
          ]
        }
      ]
    }
  ]
  


