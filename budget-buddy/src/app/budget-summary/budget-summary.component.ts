import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.css']
})
export class BudgetSummaryComponent implements OnInit {

  total = 0;
  percent = 0;
  budget = 1000;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.total.subscribe(newTotal => this.updateTotal(newTotal));
    this.budgetService.total.subscribe(this.updateTotal.bind(this));
    this.budgetService.addExpense({description: "Hi", amount:200, category: "Bills"})
  }

  updateTotal(newTotal: number) {
    this.total = newTotal;
    this.percent = Math.min(newTotal / this.budget, 1) * 100;
  }

}
