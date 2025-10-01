"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
    const baseClasses = 'calculator-btn focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors';
    const variantClasses = {
        primary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
        accent: 'bg-orange-500 hover:bg-orange-600 text-white',
    };
    const sizeClasses = {
        small: 'py-1 px-2 text-sm',
        medium: 'py-2 px-4',
        large: 'py-3 px-6 text-lg',
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    return (<button className={classes} {...props}>
      {children}
    </button>);
};
exports.Button = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBMEI7QUFPbkIsTUFBTSxNQUFNLEdBQTBCLENBQUMsRUFDNUMsUUFBUSxFQUNSLE9BQU8sR0FBRyxTQUFTLEVBQ25CLElBQUksR0FBRyxRQUFRLEVBQ2YsU0FBUyxHQUFHLEVBQUUsRUFDZCxHQUFHLEtBQUssRUFDVCxFQUFFLEVBQUU7SUFDSCxNQUFNLFdBQVcsR0FBRyxzRkFBc0YsQ0FBQztJQUMzRyxNQUFNLGNBQWMsR0FBRztRQUNyQixPQUFPLEVBQUUsNkNBQTZDO1FBQ3RELFNBQVMsRUFBRSw2Q0FBNkM7UUFDeEQsTUFBTSxFQUFFLDhDQUE4QztLQUN2RCxDQUFDO0lBQ0YsTUFBTSxXQUFXLEdBQUc7UUFDbEIsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQixNQUFNLEVBQUUsV0FBVztRQUNuQixLQUFLLEVBQUUsbUJBQW1CO0tBQzNCLENBQUM7SUFFRixNQUFNLE9BQU8sR0FBRyxHQUFHLFdBQVcsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBRTlGLE9BQU8sQ0FDTCxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUNwQztNQUFBLENBQUMsUUFBUSxDQUNYO0lBQUEsRUFBRSxNQUFNLENBQUMsQ0FDVixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBMUJXLFFBQUEsTUFBTSxVQTBCakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMgZXh0ZW5kcyBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4ge1xuICB2YXJpYW50PzogJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAnYWNjZW50JztcbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB2YXJpYW50ID0gJ3ByaW1hcnknLFxuICBzaXplID0gJ21lZGl1bScsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBiYXNlQ2xhc3NlcyA9ICdjYWxjdWxhdG9yLWJ0biBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgdHJhbnNpdGlvbi1jb2xvcnMnO1xuICBjb25zdCB2YXJpYW50Q2xhc3NlcyA9IHtcbiAgICBwcmltYXJ5OiAnYmctZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0zMDAgdGV4dC1ncmF5LTgwMCcsXG4gICAgc2Vjb25kYXJ5OiAnYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTgwMCcsXG4gICAgYWNjZW50OiAnYmctb3JhbmdlLTUwMCBob3ZlcjpiZy1vcmFuZ2UtNjAwIHRleHQtd2hpdGUnLFxuICB9O1xuICBjb25zdCBzaXplQ2xhc3NlcyA9IHtcbiAgICBzbWFsbDogJ3B5LTEgcHgtMiB0ZXh0LXNtJyxcbiAgICBtZWRpdW06ICdweS0yIHB4LTQnLFxuICAgIGxhcmdlOiAncHktMyBweC02IHRleHQtbGcnLFxuICB9O1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBgJHtiYXNlQ2xhc3Nlc30gJHt2YXJpYW50Q2xhc3Nlc1t2YXJpYW50XX0gJHtzaXplQ2xhc3Nlc1tzaXplXX0gJHtjbGFzc05hbWV9YDtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufTsiXX0=