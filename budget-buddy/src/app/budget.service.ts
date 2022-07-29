import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from './interfaces/expense';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  expenses: Expense[] = [];

  private _total = new BehaviorSubject(0);
  readonly total = this._total.asObservable();

  constructor() { }

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
    this._total.next(this.getCurrentTotal() + expense.amount);
  }

  getCurrentTotal(): number {
    return this._total.getValue();
  }
}
