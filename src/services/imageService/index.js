import {unsplash} from 'AppUtils'
import { toJson } from "unsplash-js";

export function getImages(imagesNumber) {
    return new Promise((res, rej) => {
        unsplash.photos.getRandomPhoto({ count: imagesNumber })
            .then(toJson)
            .then(images => res(images));
    });
}