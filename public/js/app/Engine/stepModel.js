"use strict";
var StepModel = (function () {
    function StepModel(step_id, type, name, configuration, master_name, master_type, conditions, datas) {
        this.step_id = step_id;
        this.type = type;
        this.name = name;
        this.configuration = configuration;
        this.master_name = master_name;
        this.master_type = master_type;
        this.conditions = conditions;
        this.datas = datas;
    }
    return StepModel;
}());
exports.StepModel = StepModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9zdGVwTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0ksbUJBQXFCLE9BQWUsRUFBUyxJQUFZLEVBQVMsSUFBWSxFQUN6RCxhQUFrQixFQUFTLFdBQW1CLEVBQVMsV0FBbUIsRUFDMUUsVUFBc0IsRUFBUyxLQUFpQjtRQUZoRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7UUFDekQsa0JBQWEsR0FBYixhQUFhLENBQUs7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQzFFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFZO0lBRXJFLENBQUM7SUFDTCxnQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksaUJBQVMsWUFNckIsQ0FBQSIsImZpbGUiOiJFbmdpbmUvc3RlcE1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0ZXBNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoIHB1YmxpYyBzdGVwX2lkOiBudW1iZXIsIHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBhbnksIHB1YmxpYyBtYXN0ZXJfbmFtZTogc3RyaW5nLCBwdWJsaWMgbWFzdGVyX3R5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgcHVibGljIGNvbmRpdGlvbnM6IEFycmF5PGFueT4sIHB1YmxpYyBkYXRhczogQXJyYXk8YW55Pikge1xyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
