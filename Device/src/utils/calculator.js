"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = exports.calculateResult = exports.formatOperand = void 0;
const formatOperand = (operand) => {
    if (operand == null)
        return '';
    const [integer, decimal] = operand.split('.');
    if (decimal == null) {
        return new Intl.NumberFormat('en-US').format(Number(integer));
    }
    return `${new Intl.NumberFormat('en-US').format(Number(integer))}.${decimal}`;
};
exports.formatOperand = formatOperand;
const calculateResult = (previousOperand, currentOperand, operator) => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current))
        return '';
    let computation = 0;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return '';
    }
    return computation.toString();
};
exports.calculateResult = calculateResult;
exports.initialState = {
    currentOperand: '0',
    previousOperand: '',
    operator: null,
    overwrite: false,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFzQixFQUFVLEVBQUU7SUFDOUQsSUFBSSxPQUFPLElBQUksSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNwQixPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2hGLENBQUMsQ0FBQztBQVRXLFFBQUEsYUFBYSxpQkFTeEI7QUFFSyxNQUFNLGVBQWUsR0FBRyxDQUM3QixlQUF1QixFQUN2QixjQUFzQixFQUN0QixRQUFrQixFQUNWLEVBQUU7SUFDVixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekMsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTNDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUU3QyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDcEIsUUFBUSxRQUFRLEVBQUUsQ0FBQztRQUNqQixLQUFLLEdBQUc7WUFDTixXQUFXLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUM3QixNQUFNO1FBQ1IsS0FBSyxHQUFHO1lBQ04sV0FBVyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7WUFDN0IsTUFBTTtRQUNSLEtBQUssR0FBRztZQUNOLFdBQVcsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQzdCLE1BQU07UUFDUixLQUFLLEdBQUc7WUFDTixXQUFXLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUM3QixNQUFNO1FBQ1I7WUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxPQUFPLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUE3QlcsUUFBQSxlQUFlLG1CQTZCMUI7QUFFVyxRQUFBLFlBQVksR0FBb0I7SUFDM0MsY0FBYyxFQUFFLEdBQUc7SUFDbkIsZUFBZSxFQUFFLEVBQUU7SUFDbkIsUUFBUSxFQUFFLElBQUk7SUFDZCxTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsY3VsYXRvclN0YXRlLCBPcGVyYXRvciB9IGZyb20gJy4uL3R5cGVzL2NhbGN1bGF0b3IuanMnO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0T3BlcmFuZCA9IChvcGVyYW5kOiBzdHJpbmcgfCBudWxsKTogc3RyaW5nID0+IHtcbiAgaWYgKG9wZXJhbmQgPT0gbnVsbCkgcmV0dXJuICcnO1xuICBjb25zdCBbaW50ZWdlciwgZGVjaW1hbF0gPSBvcGVyYW5kLnNwbGl0KCcuJyk7XG4gIFxuICBpZiAoZGVjaW1hbCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnKS5mb3JtYXQoTnVtYmVyKGludGVnZXIpKTtcbiAgfVxuICBcbiAgcmV0dXJuIGAke25ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnKS5mb3JtYXQoTnVtYmVyKGludGVnZXIpKX0uJHtkZWNpbWFsfWA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUmVzdWx0ID0gKFxuICBwcmV2aW91c09wZXJhbmQ6IHN0cmluZyxcbiAgY3VycmVudE9wZXJhbmQ6IHN0cmluZyxcbiAgb3BlcmF0b3I6IE9wZXJhdG9yXG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwcmV2ID0gcGFyc2VGbG9hdChwcmV2aW91c09wZXJhbmQpO1xuICBjb25zdCBjdXJyZW50ID0gcGFyc2VGbG9hdChjdXJyZW50T3BlcmFuZCk7XG4gIFxuICBpZiAoaXNOYU4ocHJldikgfHwgaXNOYU4oY3VycmVudCkpIHJldHVybiAnJztcbiAgXG4gIGxldCBjb21wdXRhdGlvbiA9IDA7XG4gIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICBjYXNlICcrJzpcbiAgICAgIGNvbXB1dGF0aW9uID0gcHJldiArIGN1cnJlbnQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgIGNvbXB1dGF0aW9uID0gcHJldiAtIGN1cnJlbnQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcqJzpcbiAgICAgIGNvbXB1dGF0aW9uID0gcHJldiAqIGN1cnJlbnQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcvJzpcbiAgICAgIGNvbXB1dGF0aW9uID0gcHJldiAvIGN1cnJlbnQ7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG4gIFxuICByZXR1cm4gY29tcHV0YXRpb24udG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENhbGN1bGF0b3JTdGF0ZSA9IHtcbiAgY3VycmVudE9wZXJhbmQ6ICcwJyxcbiAgcHJldmlvdXNPcGVyYW5kOiAnJyxcbiAgb3BlcmF0b3I6IG51bGwsXG4gIG92ZXJ3cml0ZTogZmFsc2UsXG59OyJdfQ==