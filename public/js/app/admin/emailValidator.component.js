"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    constructor() { }
    static checkEmail(control) {
        let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "Please provide a valid email": true };
        }
        return null;
    }
}
exports.EmailValidator = EmailValidator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2VtYWlsVmFsaWRhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBSUksZ0JBQWUsQ0FBQztJQUVoQixNQUFNLENBQUMsVUFBVSxDQUFDLE9BQW9CO1FBQ2xDLElBQUksWUFBWSxHQUFHLHdKQUF3SixDQUFDO1FBRTVLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFMUYsTUFBTSxDQUFDLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDcEQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBaEJELHdDQWdCQyIsImZpbGUiOiJhZG1pbi9lbWFpbFZhbGlkYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIEVtYWlsVmFsaWRhdG9yIHtcblxuICAgIHZhbGlkYXRvcjogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzdGF0aWMgY2hlY2tFbWFpbChjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICAgICAgICBsZXQgRU1BSUxfUkVHRVhQID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT0gXCJcIiAmJiAoY29udHJvbC52YWx1ZS5sZW5ndGggPD0gNSB8fCAhRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiB7IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbFwiOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
