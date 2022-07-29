import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Expense } from '../interfaces/expense';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.expenses = this.budgetService.expenses;
  }

}
