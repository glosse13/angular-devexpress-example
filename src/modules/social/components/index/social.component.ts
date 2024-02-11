import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SocialService } from '../../services/social.service';
import { BaseIndexComponent } from '../../../../core/common/base-index-component';
import { ISocial } from '../../../../core/models/ISocial';
import { InsertComponent } from '../insert/insert.component';
import { ModalService } from '../../../shared/services/modal.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent
  extends BaseIndexComponent<ISocial>
  implements AfterViewInit,OnInit
{
  displayedColumns: string[] = ['link', 'name', 'description'];
  dataSource = new MatTableDataSource<ISocial>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(socialService: SocialService,
    public override modal: ModalService) {
    super(socialService,InsertComponent,modal)
    this.baseService = socialService;      
    this.context = { componentParent: this };
  }
  ngOnInit(): void {
    this.reloadGrid.asObservable().subscribe(()=>this.dataSource.data = this.rowData);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.loadData();
  }
}
