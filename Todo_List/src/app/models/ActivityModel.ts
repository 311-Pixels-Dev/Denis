class ActivityModel {
    public name: string;
    public complete: boolean;
    public category: string;

    constructor(name: string, category: string) {
        this.name = name;
        this.complete = false;
        category == null ? this.category = "Senza categoria" : this.category = category;
    }

    public setComplete() {
        this.complete = !this.complete;
    }
}

export default ActivityModel;