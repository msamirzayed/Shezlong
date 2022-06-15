export const APIURL = {
  doctors: {
    all: '/client/listTherapists?page=',
    one: '',
    add: '',
    update: '',
    delete: '',
  },
};

export interface IURL {
  all?: string;
  one?: string;
  add?: string;
  update?: string;
  delete?: string;
  block?: string;
}
