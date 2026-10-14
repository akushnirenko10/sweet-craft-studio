import SlimSelect from 'slim-select';
import '../css/slim-select.css';
import { refs } from './refs.js';

export const slimSelect = new SlimSelect({
  select: refs.sweetSelect,
  settings: {
    showSearch: false,
  },
});
