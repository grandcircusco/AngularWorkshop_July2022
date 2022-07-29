import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../interfaces/expense';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  expenses: Expense[] = [
    { description: "Groceries", category: "Food", amount: 400 },
    { description: "Energy", category: "Bills", amount: 108 },
    { description: "Water & Sewer", category: "Bills", amount: 84 },
    { description: "Tigers Game", category: "Entertainment", amount: 97 },
    { description: "Netflix Subscription", category: "Entertainment", amount: 9.99 }
  ];

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
