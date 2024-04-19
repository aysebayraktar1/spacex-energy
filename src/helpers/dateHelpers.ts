import dayjs from 'dayjs';

export const formatDate = (utcDate: string, format: string = 'MMMM DD, YYYY'): string => {
    return dayjs(utcDate).format(format);
};