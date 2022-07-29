import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { Expense } from '../interfaces/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  values: Expense = {
    amount: NaN,
    description: "",
    category: ""
  };

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    this.budgetService.addExpense({ ...this.values });
    // Clear form
    form.resetForm();
    this.values = {
      amount: NaN,
      description: "",
      category: ""
    };
  }

}
